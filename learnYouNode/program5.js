const path = require('path');

var fs = require('fs');

var fileExt = process.argv[3];
var data = fs.readdir(process.argv[2],'utf8',function(err,files){

    files.forEach(function(filename) {
        if("."+fileExt==path.extname(filename))
        {
            console.log(filename);
        }
    }, this);
} );
