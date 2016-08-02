var mymodule = require('./program6_mod.js');
var callBackFucntion = function(err,data) {
    if(err)
    {
        console.log("error returned"+err);
    }
    console.log(data);
    
    
}

mymodule(process.argv[2],process.argv[3],callBackFucntion);

