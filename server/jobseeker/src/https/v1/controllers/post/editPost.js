const Post = require('../../../../models/Post');

exports.execute = async (req, res, next) => {
    const bodyPost = req.body;
    const {id} = req.params;

    await Promise.resolve()
    .then(async () => {
        let newPost = await Post.editPost({
            id,
            bodyPost,
        })
        res.status(201).json(newPost);
    })
    .catch((err) => {
        console.log(err)
    })
}