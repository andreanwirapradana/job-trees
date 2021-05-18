const { getDataBase } = require('../config');
const { ObjectId } = require('mongodb');
const db = getDataBase();
const User = db.collection('Users');
const bcrypt = require('bcryptjs');

const hashing = ((instance, option) => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(instance, salt)
    return instance = hash
})


class UserModel {
    static findOne(email) {
        return User.findOne({ $or: [{email}, {_id: email}]});
    };

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
    };

    static updateProfile(dataId, dataSet) {
        return User.findOneAndUpdate({_id: ObjectId(dataId)}, {$set: dataSet});
    };
    
    // static updateUser(dataId, dataSet) {
    //     return User.findOneAndUpdate({_id: ObjectId(dataId)}, {$set: dataSet});
    // };
};

module.exports = UserModel;