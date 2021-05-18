const { getDataBase } = require('../config');
const { ObjectId } = require('mongodb');
const db = getDataBase();
const Post = db.collection('Posts');

// TODO Need changes (Only get what you need)

class PostModel {
    static findAll() {
        return Post.aggregate([
            { $lookup:
                {
                  from: 'Users',
                  localField: 'userId',
                  foreignField: '_id',
                  as: 'creator'
                }
            }
        ]).toArray();
    };

    static findOne(postId) {
        return Post.findOne({_id: ObjectId(postId)});
    }

    static submitPost(post) {
        return Post.insertOne({
            userId: post.userId,
            bodyPost: post.bodyPost,
        });
    };

    static editPost({id, bodyPost}) {
        console.log(bodyPost)
        return Post.findOneAndUpdate({_id: ObjectId(id)}, {$set: bodyPost});
    };

    static deletePost({postId}) {
        return Post.deleteOne({postId});
    };
};


module.exports = PostModel;