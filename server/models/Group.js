const { Schema, model } = require('mongoose');


const groupSchema = new Schema ({

    name: {
        type: String,
        required: true,
        unique: true
    },
    owner: {
        type: Schema.Types.String,
        ref: 'User'
    },
    members: [
        {
        
        type: Schema.Types.String,
        ref:'User'

    }  
    ]
})

const Group = model('Group', groupSchema);

module.exports = Group;