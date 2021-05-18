const User = require('../../../../models/User');
const {check} = require('express-validator');
const httpExceptions = require('../../../../exceptions/httpExceptions');

exports.validationRules = () => [
    check('email').exists().withMessage('Email is required'),
    check('email').isEmail().withMessage('Invalid email format'),
    check('password').exists().withMessage('Password is required'),
];

exports.execute = async (req, res, next) => {
    const {email, password} = req.body;
    await Promise.resolve()
    .then(async () => {
        let user = await User.findOne({email})
        if (!user) {
            throw httpExceptions(404, 'No user found')
        }
        if (!user.checkPasswords(password)) {
            throw httpExceptions(404, 'Invalid Credentials')
            // res.status(400).json({message: 'Wrong Credentials'})
        }
        const token = await user.produceToken();
        await user.save();

        res.status(200).json({
            message: 'Login Successful',
            result: {
                tokenType: 'bearer',
                accessToken: token,
                user
            }
        })

    })
    .catch((err) => {
        console.log(err)
    })
}