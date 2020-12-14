=======
// this is a testing section
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';

// const client = new MongoClient(url);
// const assert = require('assert');
// const dbName = 'database';

// app.get('/testdb', (req, res, next) => {
//     let db = client.db(dbName);
//     let collection = db.collection('agents');
//     collection.find({}).toArray(function(err, agents){
//         assert.strictEqual(err, null);
//         res.render('testdb', { agents });
//     });
// });

// client.connect(function(err) {
//     assert.strictEqual(null, err);
//     console.log('connected to mongodb');
// });

// Tim Testing Section

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const assert = require('assert');

const client = new MongoClient(url);

app.get('/packages/:pkName', (req, res, next) => {

    let database = client.db('threaded');
    let collection = database.collection('packages');
    collection.find({}).toArray(function (err, pck) {
        assert.strictEqual(err, null);
        console.log(pck);
        // res.render(pck);
    });
});


client.connect(function (err) {
    assert.strictEqual(null, err);
    console.log('connected to mongodb');
>>>>>>> Stashed changes
});