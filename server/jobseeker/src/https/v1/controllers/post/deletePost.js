const Post = require('../../../../models/Post');

exports.execute = async (req, res, next) => {
    const {id} = req.params;

    await Promise.resolve()
    .then(async () => {
        let result = await Post.deletePost({postId: id})
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err)
    })
}