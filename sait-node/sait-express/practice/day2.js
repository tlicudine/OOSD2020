const http = require("http");
const fs = require("fs");
const url = require('url');
const { randomGreeting } = require("../greeting.js");

const otterServer = http.createServer((req, res) => {
    let greet = randomGreeting();
    res.writeHead(200, { "Content-Type": "text/html" });   
    res.write(`<h1>${greet}!</h1>`);
    res.end();
});

otterServer.listen(8000, () => {
    console.log("Server started on port 8000");
});