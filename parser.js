
fs = require('fs');
var process = require('process');
var cp = require('child_process');
var server = cp.fork('app.js');
console.log('Server started');


fs.watchFile(__dirname+'/data.xml', function (event, filename) {
    console.log("file changed");
    server.kill();
    console.log('Server stopped');
    server = cp.fork('app.js');
    console.log('Server started');
});
    