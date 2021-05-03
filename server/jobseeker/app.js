require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.port || 3001;
const {connectDB} = require('./src/config');

const app = express();

connectDB((err) => {
    if(!err) {
        const router = require('./src/https/v1/routes');
        app.use(express.json());
        app.use(express.urlencoded({extended:true}));
        app.use(cors());
        
        app.use(router);

        app.listen(port, () => {
            console.log(`Jobseeker is listening on port ${port}`)
        })
    };
});


