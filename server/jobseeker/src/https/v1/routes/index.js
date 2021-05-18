const route = require('express').Router();
const authRoute = require('./authRoute');
const profileRoute = require('./profile');
const authenticate = require('../../../middlewares/authentication');
const postRoute = require('./post');

route.use('/user', authRoute)

route.use(authenticate);
route.use('/profile', profileRoute);
route.use('/post', postRoute);

module.exports = route;