const User = require('../../../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const response = require('../../../')


exports.execute = async (req, res, next) => {
    const {email, password} = req.body;
    console.log(email, password)
    await Promise.resolve()
    .then( async () => {
        let foundUser = await User.findOne(email)
        if (!foundUser || !(bcrypt.compareSync(password, foundUser.password))) {
            console.log("Salah tuh")
        } else {
            const access_token = jwt.sign({id: foundUser._id, username: foundUser.username, email: foundUser.email}, process.env.secretKey)
            res.status(200).json({message: 'Login Success', access_token})
        }
    })
    .catch((err) => {
        console.log(err)
    })
}