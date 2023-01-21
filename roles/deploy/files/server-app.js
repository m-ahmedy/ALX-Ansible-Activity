let http = require("http");

let server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("Hello world from my app!");
});

server.listen(3000);