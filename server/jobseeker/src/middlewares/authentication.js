const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const User = require('../models/User');

const Authenticate = (req, res, next) => {
    const {authorization} = req.headers;
    // console.log('masuk', req.headers)

    try {
        const decoded = jwt.verify(authorization, process.env.secretKey);
        req.userData = decoded;

        User.findOne({email: req.userData.email})
        .then(data => {
            console.log('Authenticated')
            next()
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = Authenticate;