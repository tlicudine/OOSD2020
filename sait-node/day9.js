const http = require("http");
const greeting = require("./greeting.js")

let server = http.createServer((req,res) => {


});

server.listen( 8000, ()=>{
    console.log("Listening to port 8000.");
});