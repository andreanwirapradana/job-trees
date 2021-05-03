const route = require('express').Router();
const authRoute = require('./authRoute');

route.use('/user', authRoute)

module.exports = route;