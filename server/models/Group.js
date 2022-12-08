const { Schema, model } = require('mongoose');


const groupSchema = new Schema ({

    name: {
        type: String,
        required: true,
        unique: true
    },
    ownerID : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    members: [{

        type: Schema.Types.ObjectId,
        ref:'User'

    }  
    ]
})

const Group = model('Group', groupSchema);

module.exports = Group;