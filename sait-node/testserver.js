const http = require("http");
const fs = require("fs");
const { randomGreeting } = require("./greeting.js");


let server = http.createServer((req, res) => {
    let greet = randomGreeting();
    res.writeHead(200, { "Content-Type": "text/html" });   
    res.write(`<h1>${greet}, World!</h1>`);
    res.end();
});

server.listen( 8000, ()=>{
    console.log(`Listening to port 8000.`);
});

