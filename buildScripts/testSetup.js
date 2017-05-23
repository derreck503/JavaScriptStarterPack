//This file isn't tranpiled, so must use CommonJs and ES5

//Register babel to transpile before our test run.
require('babel-register')();

//Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function(){};