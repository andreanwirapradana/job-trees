const { getDataBase } = require('../config');
const { ObjectId } = require('mongodb');
const db = getDataBase();
const User = db.collection('Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const hashing = ((instance, option) => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(instance, salt)
    return instance = hash
})


class UserModel {
    static findAll() {
        return User.find({}).toArray();
    };

    static register(newUser) {
        let user = {
            username: newUser.username,
            password: hashing(newUser.password),
            email: newUser.email,
        }
        return User.insertOne(user);
    }
};

module.exports = UserModel;