const http = require("http");
const fs = require("fs");

var server = http.createServer((req, res) => {
    fs.open("demo.html", "r", (err, file)=> {
        if (err) throw err;

        fs.fstat(file, (err, stats)=> {
            var buffer = Buffer.alloc(stats.size);
            fs.read(file, buffer, 0, buffer.length, null, (err, bytesRead, buffer)=>{
                if (err) throw err;
                res.writeHead(200, {"Content-Type":"text/html"});
                res.write(buffer);
                res.end();
            });

        fs.close(file, (err) => {
            if (err) throw err;
        });
        });
    });
});

server.listen(3000, ()=>{
    console.log("Listening to port 3000.");
});