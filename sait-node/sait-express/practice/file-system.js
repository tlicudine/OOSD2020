const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
    fs.readFile("demo.html", (err, data) => {
        response.writeHead(200, { "Content-Type": "text/html" });

        // Write the data that we read from "demo.html".
        response.write(data);
        response.end();
    });
}).listen(8000, () => {
    console.log(`Server running on port 8000`);
});