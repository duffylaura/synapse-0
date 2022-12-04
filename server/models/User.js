const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    groups: [
    {
        type: Schema.Types.ObjectId,
        ref:"Group"
    }
    ]
}
);

const User = model('User',userSchema);

module.exports = User;