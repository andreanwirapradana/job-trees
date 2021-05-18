const route = require('express').Router();
const insertProfile = require('../controllers/profile/insertProfile');

route.post('/insert', insertProfile.execute);


module.exports = route;