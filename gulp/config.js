'use strict';

const config = {

  browserPort: 3000,
  UIPort: 3001,

  scripts: {
    src: './app/js/**/*.js',
    dest: './build/js/',
    test: './tests/**/*.js',
    gulp: './gulp/**/*.js'
  },

  images: {
    src: './app/img/**/*.{jpeg,jpg,png,gif}',
    dest: './build/img/'
  },

  styles: {
    src: './app/sass/**/*.scss',
    dest: './build/css/'
  },

  sourceDir: './app/',

  buildDir: './build/',

  testFiles: './tests/**/*.{js,jsx}',

  assetExtensions: [
    'js',
    'css',
    'map',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ]


};

export default config;
