const route = require('express').Router();
const register = require('../controllers/auth/register');

route.post('/register', register.execute);

module.exports = route;