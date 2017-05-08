<h1>Get Started</h1>


<h2>CLI Commands</h2>

| Command                   | Description                                                   |
|:-------------------------:|:-------------------------------------------------------------:|
| `npm start`             | Compile assets and start a BrowserSync development server.   | 
| `npm run dev`             | Compile assets and start a BrowserSync development server.     | 
| `npm run dev-deploy`      | Sync files and folders within your specified build/distribution folder to a remote server via FTP. | 
| `npm run deploy`      | Compile assets for the production environment + sync files and folders within your specified build/distribution folder to a remote server via FTP. | 
| `npm run test`      | Run a virtual JS environment and run an all-round test of project | 

<h3>Setup</h3>

- Configure your FTP remote server sync.

    [deploy/config.yml](deploy/config.yml)

- Configure your Gulp build structure.

    [gulp/config.js](gulp/config.js)

- Optional: Add new Gulp tasks
    
    Add a .JS file to [gulp/tasks](gulp/tasks) folder to run upon Gulp initiation.

- Optional: Change/Remove [api/](api/) folder. 

    *Tip: run a quick Apache server by running the following*
    ```bash
    $ php -S localhost:XXXX
    ```




<h3>PHPStorm Configuration</h3>

<h4>Setup ECMAScript 6 Environment</h4>
1. Go to
```Settings / Languages & Frameworks / Javascript / Javascript language version ```

2. Select ```ECMAscript 6``` from the drop-down menu, then click ```Apply```

<h4>Install EJS File Support</h4>
1. Go to
```Plugins / Install Jetbrains Plugin... ```

2. Select ```EJS``` plugin from the search results, then click ```Install``` from the description.


<h3>Initial Framework Setup</h3>

<h4>Installing Gulp</h4>

1. Check if gulp is installed (If it does not print a version, it is not installed).
    
    ```bash
    gulp -v
    ```

2. If not,

    ```bash
    npm install gulp-cli -g
    ```
3. Go to **step 1** to check if gulp has been successfully installed.