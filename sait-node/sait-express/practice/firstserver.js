const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    // response.write("<h1>Hello World!</h1>");
    response.write(request.url);
    response.end();
}).listen(8000, () => {
    console.log(`Server running on port 8000`);
});
