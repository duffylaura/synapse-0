const { Schema, model } = require('mongoose');


const groupSchema = new Schema ({

    name: {
        type: String,
        required: true,
        unique: true
    },
    ownerID : {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    user: [{

        type: Schema.Types.ObjectId,
        ref:'Users'

    }  
    ]
})

const Group = model('Group', groupSchema);

module.exports = Group;