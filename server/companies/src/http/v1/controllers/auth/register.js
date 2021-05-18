const { check } = require('express-validator');
const User = require('../../../../models/User');
const { Promise } = require('mongoose');

const register = async ({
    email, password
}) => new Promise((resolve, reject) => {
    User.findOne({email}).then((existingUser) => {
        if (existingUser) {
            reject(res.status(400).json({message: 'Duplicate Email'}))
        } else {
            User.create({
                email,
                password: User.hashPassword(password),
                isUsePassword: true,
            }).then((user) => {
                resolve(user);
            }).catch((err) => {
                console.log(err)
            });
        }
    });
});

exports.validationRules = () => [
    check('email').exists().withMessage('Email is required'),
    check('email').isEmail().withMessage('Invalid email format'),
    check('password').exists().withMessage('Password is required'),
];

exports.execute = async (req, res, next) => {
    console.log(req.body)
    const { email, password } = req.body;
    await Promise.resolve()
    .then(async () => {
        register({
            email, password
        }).then((user) => {
            const message = 'Register Succesful'

            res.status(201).json({
                message,
                result: {
                    user
                }
            })
        }).catch((err) => {
            console.log(err)
        })
    })
    .catch((err) => {
        console.log(err)
    })
};