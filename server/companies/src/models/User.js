const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mainConnection = require('../config');

const { Schema } = mongoose;

const transformFields = function (doc, ret) {
    delete ret._id;
    delete ret.__v;
    delete ret.deleted;
    delete ret.password;
    if (process.env.NODE_ENV === 'production') {
        delete ret.verificationCode;
    }
};

const UserSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            sparse: true,
        },
        name: {
            type: String,
            trim: true,
            default: '',
        },
        password: {
            type: String,
        },
    },
    {
        toObject: {
            virtuals: true,
            transform: transformFields,
        },
        toJson: {
            virtuals: true,
            transform: transformFields,
        },
        timestamps: true,
    }
);

const generateAccessToken = async (user, expiredLengthInSeconds) => {
    const payload = {
        userId: user.id
    };
    return jwt.sign(payload, process.env.secretKey, {
        expiresIn: expiredLengthInSeconds,
        issuer: user.id
    });
};

UserSchema.methods.produceToken = async function () {
    const expiredLengthInSeconds = 60 * 60 * 24 * 30 * 12 // 1 year
    return generateAccessToken(this, expiredLengthInSeconds);
};

UserSchema.methods.checkPasswords = function (password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.statics.verivyToken = async (token) => {
    try {
        const decodedToken = jwt.verify(token, process.env.secretKey);
        if (!decodedToken.hasOwnProperty('userID')) {
            return null;
        };
        const data = await UserSchema.findById(decodedToken.userId);
        if (!data) {
            return null;
        }
        return {
            user: data,
            auth: decodedToken
        }
    } catch (error) {
        console.log(error)
        return null;
    }
};

UserSchema.statics.hashPassword = (originalPassword) => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(originalPassword, salt)
    return instance = hash
};

const User = mainConnection.model('User', UserSchema);

module.exports = User;

