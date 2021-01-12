const express = require('express');
const app = express();
const path = require('path');
const assert = require('assert');

const bodyParser = require('body-parser');
const greeting = require("./greeting.js");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'views')));

app.listen(8000, function () {
    console.log('Server started on port 8000');
});

app.get('/' || "/index", (req, res) => {
    let greet = greeting.randomGreeting();
    res.render('index', { greet });
});

app.get('/index', (req, res) => {
    let greet = greeting.randomGreeting();
    res.render('index', { greet });
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('*', (req, res) => {
    res.render('404');
});

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'
const dbName = "database"
let db

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err);

    db = client.db('database');
    const contactCollection = db.collection('contacts');
    console.log(`Connected MongoDB: ${url}`)
    console.log(`Database: ${dbName}`)

    app.post('/contactform', (req, res) => {
        contactCollection.insertOne(req.body)
            .then(res => {
                console.log(res)
            })
            .catch(error => console.error(error))
        console.log(res);
        let contactName = contactCollection.find().toArray();
        console.log(contactName);
        res.render("thankyou", { contactName })
    });

    app.get('/', (req, res) => {
        const cursor = db.collection('quotes').find();

    })
});
