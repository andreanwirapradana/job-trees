const { getDataBase } = require('../config');
const { ObjectId } = require('mongodb');
const db = getDataBase();
const Profile = db.collection('Profiles');

class ProfileModel {
    static insertProfile(data) {
        let profile = {
            firstName: data.firstName,
            lastName: data.lastName,
            dob: data.dob,
            city: data.city,
            skills: data.skills
        }
        return Profile.insertOne(profile);
    }

}

module.exports = ProfileModel;