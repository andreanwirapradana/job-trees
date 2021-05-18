const route = require('express').Router();
const authRoute = require('./auth');

route.get('/', (req, res) => {
    res.status(200).json({message: 'berhasil'})
})
route.use('/auth', authRoute);

module.exports = route;