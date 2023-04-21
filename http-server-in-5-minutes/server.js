const http = require("http");

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<html><body><h1>Hello World!</h1></body></html>");
});

server.listen(8080);
