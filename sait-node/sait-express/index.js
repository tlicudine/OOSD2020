const express = require("express");
const app = express();
const path = require("path");
const greet = require("randomGreeting");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.render("index");
    
});

app.use((req, res) => {
    res.sendFile(__dirname + "/views/404.html");
})

app.post("/endpoint", (req, res) => {
    console.log(req.body);
})

