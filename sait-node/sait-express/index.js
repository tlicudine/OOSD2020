const express = require('express');
const path = require('path');
const assert = require('assert');
const app = express();
const bodyParser = require('body-parser');
const greeting = require("./greeting.js");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'views')));

app.listen(8000, function () {
    console.log('Server started on port 8000');
});

app.get('/', (req, res) => {
    let greet = greeting.randomGreeting();
    res.render('index', {greet});
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