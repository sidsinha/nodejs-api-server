------------------------------------------------
Name: NodeJS API Server
Version: 1.0
Author: Siddharth Sinha [sid.sinhaa@gmail.com]
------------------------------------------------

## About

This application is a simple API server which uses NodeJS for creating API for getting data and AngularJS in frontend for UI. 
The UI aims to demonstrate:
 * List of 5 Javascript framework and 5 BuildTool
 * Can give opinion for each record as like or un-like
 * can sort the result
 * can filter the records
  

## Dev Setup Instructions

If you are interested in adding new features:

#### Pre-requisite
The application needs node to be installed.

* [Node 5.4.1](https://nodejs.org/en/blog/release/v5.4.1/) including
  [NPM](https://npmjs.org/)

##### 1. Install all dependencies

  ```
  npm install
  ```

##### 2. Make changes to html and js files and view it by opening index.html.
  
##### 3. If you add a new module / library, run the following command from root directory.

  ```
  webpack -w
  ```

## How do I use it?

##### 1. Install all dependencies (if you have'nt did already)

  ```
  npm install
  ```
  
##### 2. Start Node server API to get the data.(go to the root folder)

  ```
  npm run server
  ```

##### 3. Start web server
  
  ```
  npm start
  ```

##### 4. Just go to your favorite browser and type: http://localhost:8080

## External libraries used

##### 1. Angular JS (version=1.6.5) (A Frontend Framework - provides environment which is extraordinarily expressive, readable, and quick to develop)
##### 2. Angular Mocks (version=^1.6.5) (A AngularJS Dependency Module - for showing "timeago" functionality)
##### 3. Express (version=^4.15.3) (Express is a Node.js web application framework that provides a robust set of features for web and mobile applications)
##### 4. Body Parser (version=^1.17.2) (body-parser is a piece of Express middleware that reads a form's input and stores it as a javascript object accessible through req.body)
##### 5. Webpack (version=^1.9.0) (A Build Tool for combining all imported scripts to one "bundle.js" file)
##### 6. babel-loader (version=^7.1.1) (babel-loader uses Babel to load ES2015 files)
##### 7. babel-preset-es2015 (version=^6.24.1) (Babel preset for all es2015 plugins)
##### 8. cors (version=^2.8.4) (CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options)
##### 9. jasmine-core (version=^2.6.4) (Jasmine is a Behavior Driven Development testing framework for JavaScript)
##### 10. Karma (version=^1.7.0) (A test runner that fits best @ AngularJS)
##### 11. Nodemon (version=^1.11.0) (nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application)


## What can you expect next?

If interested, feel free to checkout the next version of the this NodeJS API Server UI and expect following additions:
* Ability to preserve reaction which is given for each record, some-where in database.
* Success message after giving all opinion to all records.
* Can add/update more category and name
* Animations around creating / updating records.



![ScreenShot](https://raw.githubusercontent.com/sidsinha/nodejs-api-server/master/app/assets/img/screnshot.png)