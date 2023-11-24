const http = require("http");
// http
//   .createServer(function (request, response) {
//     // Send the HTTP header
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, { "Content-Type": "text/plain" });

//     // Send the response body as "Hello World"
//     response.end("Hello World\n");
//   })
//   .listen(8081);

// // Console will print the message
// console.log("Server running at http://127.0.0.1:8081/");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is our short story");
  }
  res.end(`<h1>oops!</h1>

  <p>we cant seem to find the page you are looking for </p>
  <a href='/'>back home</a>`);
});

server.listen(5000);
