var http = require('http');

var url = process.argv[3];

/*var request = http.get(url, function(response) {   
    
    console.log(response.statuscode);
    response.on("data", function(data) {
        console.log(data+'\n');
    });
    response.on("error", function(data) {
        console.log(data+'\n');
    });
});*/

http.get("http://www.google.com/", function(res) {
  console.log("Got response: " + res.statusCode);
   console.log(res.data);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
}).on("data", function(data) {
        console.log(data+'\n');
    });