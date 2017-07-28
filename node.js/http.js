var http = require('http')
var url = require("url");

http.createServer(function (request, response) {
  console.log(url.parse(request.url).pathname)
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8000)