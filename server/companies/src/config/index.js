const mongoose = require('mongoose');

const connectToDB = (uri, options) => {
    const db = mongoose.createConnection(uri, options);

    db.on('error', function (error) {
        console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
        db.close().catch(() => console.log(`MongoDB :: failed to close connection ${this.name}`));
    });

    db.on('connected', function () {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', function (col, method, query, doc) {
                console.log(`MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(query)},${JSON.stringify(doc)})`);
            });
        }
        console.log(`MongoDB :: connected ${this.name}`);
    })

    db.on('disconnected', function () {
        console.log(`MongoDB :: disconnected ${this.name}`);
    });

    return db;
}

const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

const mainConnection = connectToDB(process.env.DB_URI, options);

module.exports = mainConnection