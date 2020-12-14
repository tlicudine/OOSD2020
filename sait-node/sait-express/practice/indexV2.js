const express = require("express");
const app = express();

app.listen(8000, () => {
    console.log("Server started on port 8000");
});

app.use(express.static("views", {"extension": ["htm", "html"]}));

app.get("/", (req, res)=>{
    console.log(__dirname);
    res.send("Welcome to the main page");
});

app.get("/about", (req, res)=>{
    console.log(__dirname);
    res.send(__dirname + "/about.html");
});

app.get("/contact", (req, res)=>{
    console.log(__dirname);
    res.send(__dirname + "/contact.html");
});

app.post("/newcustomer/:fname/:lname", (req, res) =>{
    console.log(req.query.fname);
    console.log(req.query.lname);
    res.send("data was received via post");
});

app.put("/newcustomer/:fname/:lname", (req, res) =>{
    console.log(req.query.fname);
    console.log(req.query.lname);
    res.send("data was received via put");
});

app.delete("/newcustomer/:custid", (req, res) =>{
    console.log(req.query.fname);
    res.send("data was received via delete");
});

app.use((req, res, next) => {
    console.log("Thank you, next");
    next();
});

app.use((req, res, next) => {
    console.log("Thank you again, next");
    next();
});

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
});
