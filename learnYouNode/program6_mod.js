const path = require('path');
var fs = require('fs');

module.exports = 
  function(dirName, fileExt, callbackfunc) 
  {
        fs.readdir(dirName,'utf8',function(err,files){
            if(err) {
                return callbackfunc(err); }
            else {
                files.forEach(function(filename)
                {
                    if("."+fileExt==path.extname(filename))
                    {
                        callbackfunc(null,filename)
                    }
                }, this);
            }
        });
    
  }
