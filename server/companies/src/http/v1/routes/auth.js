const route = require('express').Router();
const login = require('../controllers/auth/login');
const register = require('../controllers/auth/register');

route.get('/', () => {
    console.log('test')
})
route.post('/login', login.validationRules(), login.execute);
route.post('/register', register.validationRules(), register.execute);

module.exports = route;