#!/usr/bin/env node
var fs = require('fs');
var code = fs.readFileSync(process.argv[2], 'utf8');
var tmpl = fs.readFileSync(__dirname + '/runtime-tmpl.js', 'utf8');

code = tmpl.replace('===CODE===', code);
console.log(code);


