const User = require('../../../../models/User');

exports.execute = async (req, res) => {
    console.log('masuk', req.userData)
    const {
        firstName,
        lastName,
        dob,
        city,
        skills,
    } = req.body
    await Promise.resolve()
    .then( async () => {
        let newProfile = await User.updateProfile(req.userData.id ,{
            firstName,
            lastName,
            dob,
            city,
            skills,
        })
        res.status(201).json(newProfile)
    })
    .catch((err) => {
        console.log(err)
    })
}