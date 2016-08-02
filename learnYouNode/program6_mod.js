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

/* D:\Sandeep\NodeJS_Training\learnYouNode>learnyounode verify program6.js

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED

───────────────────────────────────────────────────────────────────────────


   "CHANGELOG.md"                      ==    "CHANGELOG.md"

   "LICENCE.md"                        ==    "LICENCE.md"

   "README.md"                         ==    "README.md"

   ""                                  ==    ""


───────────────────────────────────────────────────────────────────────────


  √  Submission results match expected

  √  Additional module file exports a single function

  √  Additional module file exports a function that takes 3 arguments

  ?  Your additional module file [program6_mod.js] does not appear to pass
  back an error received from fs.readdir(). Use the following idiomatic
  Node.js pattern inside your callback to fs.readdir(): if (err) return
  callback(err)


     # FAIL

     */