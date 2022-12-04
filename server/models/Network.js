const { Schema, model } = require('mongoose');

const networkSchema = new Schema({
    networkName:{
        type:String,  
    },
    userId:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Network = model('Network',networkSchema);

module.exports = Network;