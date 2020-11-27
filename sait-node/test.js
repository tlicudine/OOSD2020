const http = require("http");
const fs = require("fs");
const url = require('url');

const server = http.createServer((req, res) => {
    let fileName = '.' + req.url;
    fs.readFile(fileName, (err, data) =>{
        if (err) {
            fs.readFile("404.html", (err, data) => {
                res.writeHead(404, {"Content-Type":"text/html"});
                res.write(data);
                res.end;
            });
        }
        else{
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        }
    });
});
server.listen(8000, () => {
    console.log("Server started on port 8000");
});
