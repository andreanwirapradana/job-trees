const Post = require('../../../../models/Post');
const {ObjectId} = require('mongodb');

exports.execute = async (req, res, next) => {
    const {bodyPost} = req.body;
    const userId = req.userData.id;

    await Promise.resolve()
    .then(async () => {
        let newPost = await Post.submitPost({
            userId: ObjectId(userId),
            bodyPost,
        })
        res.status(201).json(newPost);
    })
    .catch((err) => {
        console.log(err)
    })
}