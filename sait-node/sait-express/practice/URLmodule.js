const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((request, response) => {
    let parsedAddress = url.parse(request.url, true);
    let file = "." + parsedAddress.pathname;
    fs.readFile(file, (err, data) => {
        if (err) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.write('<h1>404: Page Not Found</h1>');
            return response.end();
        }
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        return response.end();
    });
}).listen(8000, () => {
    console.log(`Server running on port 8000`);
});