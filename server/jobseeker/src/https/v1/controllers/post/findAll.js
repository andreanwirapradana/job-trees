const Post = require('../../../../models/Post');

exports.execute = async (req, res, next) => {

    await Promise.resolve()
    .then(async () => {
        let newPost = await Post.findAll()
        // console.log(newPost)
        res.status(200).json(newPost);
    })
    .catch((err) => {
        console.log(err)
    })
}