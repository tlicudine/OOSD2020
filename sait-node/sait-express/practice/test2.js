const express = require('express');
const path = require('path');
const assert = require('assert');
const otterserver = express();

otterserver.set('views', path.join(__dirname, 'views'));
otterserver.set('view engine', 'pug');

const randomGreeting = require("/greeting.js");

otterserver.use('/static', express.static(path.join(__dirname, 'static')));
otterserver.use(express.static(path.resolve(__dirname, 'views')));
otterserver.use(express.static("views", {"extensions" : ["htm","html"]}));

let greet = randomGreeting();

otterserver.get("/", (req, res) => {
    res.render("index");
});

otterserver.get("/contact", (req,res)=>{
    res.sendFile("contact");
});

// otterserver.get('/', (req, res, next) => {
//     collection.find({ PkgName: regex }).toArray((err, packages) => {
//         assert.equal(err, null);
//         res.render('index', { packages });
//     });
// });


// otterServer.listen(8000, (err) => {
//     if err throw err;
//     console.log("Server started on port 8000");
// });