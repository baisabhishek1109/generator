#!/usr/bin/env node


var path = process.cwd();
var ncp = require('ncp').ncp;
 
ncp.limit = 16;
 
ncp(path+"/node_modules/pufpgtest/test", path, function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});