const { Shema, model } = require('mongoose');

const postSchema = new Schema({
    postText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200,
    },
    postAuthor: {
        type: String,
        required: true,
    },
    //time stamp
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
            commentAuthor: {
                type: String,
                required: true,
            },
            //time stamp
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],

});

const Post = model('Post', postSchema);
module.exports = Post;