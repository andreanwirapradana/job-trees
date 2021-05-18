require('dotenv').config();
const express = require('express');

const app = express();
const http = require('http');
const cors = require('cors');
require('./src/config');

// helpers

app.use(cors());
app.use(express.json());


// routes
const routes = require('./src/http/v1/routes');

app.use(routes);

// Initialize server
const server = http.createServer(app);

const port = process.env.PORT;
server.listen(port, () => {
    console.log(`server ready, listening on port ${port}`)
})