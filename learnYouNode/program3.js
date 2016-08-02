 
var fs = require('fs');

var data = fs.readFileSync(process.argv[2],"utf8");

var count = data.split(/\n/).length-1;

console.log(count);

