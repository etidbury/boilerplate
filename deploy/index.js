'use strict';

const fs=require('fs');
const yaml = require('js-yaml');
const ftpSync = require('ftpsync');


let conf;

try {
    conf = yaml.safeLoad(fs.readFileSync('./deploy/config.yml', 'utf8'));
} catch (e) {
    console.error("Error parsing configuration. Please make sure configuration has maintained YAML structure \n(i.e. no duplicate keys, correct spaces, line breaks etc.)");
    return;
}


if (!conf){
    console.error("Failed to load configuration");
    return;
}

const mode=process.env.NODE_ENV==="production"||process.env.NODE_ENV==="prod"?"prod":"dev";

if (!conf[mode]){
    console.error("Configuration not specified for environment:",mode);
    return;
}

conf=conf[mode];//select environment

if (!conf.path||!conf.path.length){
    console.error("Destination directory/path not specified!");
    return;
}

ftpSync.settings = {
    host: conf.host,
    port: conf.port||21, // defaults to 21
    user: conf.username,
    pass: conf.password,
    local: './build/',
    remote: conf.path,
    //connections:"2",
    ignore:conf.ignore_files||[]
};


ftpSync.run(function(err, result) {

    if (err){
        console.error(err.Error||"Unknown error occurred");
        return;
    }

    console.log("Successfully synced with",conf.host);

    process.exit(0);


});