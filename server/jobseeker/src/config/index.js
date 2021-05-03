const {MongoClient} = require('mongodb');

const dbName = 'jobseeker';
let uri = `mongodb://localhost:27017`
let db;

const client = new MongoClient(uri, {useUnifiedTopology: true});

function connectDB(cb) {
    client.connect((err) => {
        if(err) {
            console.log('jobseeker mongo unable to connect!', err)
        } else {
            db = client.db(dbName);
            console.log('jobseeker successfully connected');
        };
        cb(err);
    });
};

function getDataBase() {
    return db;
};

module.exports = {
    connectDB,
    getDataBase,
};