const User = require('../../../../models/User');

exports.execute = async (req, res) => {
    const {email, password, username} = req.body;
    console.log(req, "ini email")
    await Promise.resolve()
    .then( async () => {
        let user = await User.register({email, password, username})
        res.status(201).json(user);
    })
};