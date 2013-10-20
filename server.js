var http = require('http');
var url = require('url');

function startServer(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello world!');
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

exports.startServer = startServer;

//function say(word) {
//  console.log('Hello!');
//}
//
//function execute(some_function, value) {
//  some_function(value);
//}
//
//execute(say, 'Hello!');

//function execute(some_function, value) {
//  some_function(value);
//}
//
//execute(function(word) { console.log(word); }, "Say Hello!");