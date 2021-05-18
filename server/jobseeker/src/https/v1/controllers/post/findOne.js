const Post = require('../../../../models/Post');
const User = require('../../../../models/User');


exports.execute = async (req, res, next) => {
    const {id} = req.params;
    console.log(id)

    await Promise.resolve()
    .then(async () => {
        let foundPost = await Post.findOne(id)
        let foundUser = await User.findOne(foundPost.userId)
        foundPost.creator = {
            username: foundUser.username
        }
        res.status(200).json(foundPost);
    })
    .catch((err) => {
        console.log(err)
    })
}