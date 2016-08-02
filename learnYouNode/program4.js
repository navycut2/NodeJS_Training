
var fs = require('fs');

var data = fs.readFile(process.argv[2],"utf8",function(err,data){
    var count = data.split(/\n/).length-1;
    console.log(count);
});



