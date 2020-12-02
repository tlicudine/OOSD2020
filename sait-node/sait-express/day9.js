const http = require("http");
const fs = require("fs");
const { randomGreeting } = require("./greeting.js");
let greet = randomGreeting();



let server = http.createServer((req,res) => {
    fs.open('greeting.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
      });
});

server.listen( 8000, ()=>{
    console.log(`${greet}, Listening to port 8000.`);
});