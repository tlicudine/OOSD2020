const express = require("express");
const app = express();
const port = 8000;

app.listen(port, (err)=> {
    if err throw err;
    console.log(`Server started on port ${port}`);
});

app.use(express.static("views", {"extensions" : ["htm","html"]}));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.get("/contact", (req,res)=>{
    res.sendFile("contact.html");
});