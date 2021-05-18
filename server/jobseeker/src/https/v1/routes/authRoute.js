const route = require('express').Router();
const register = require('../controllers/auth/register');
const login = require('../controllers/auth/login');

route.post('/login', login.execute);
route.post('/register', register.execute);

module.exports = route;