const { Group, User, Network} = require('../models');

const resolvers = {
    Query: {
        groups: async () => {
            return await Group.find({}).populate('users');
        },
        users: async() => {
            return await User.find();
        },
        networks: async () => {
            return await Network.find();
        }
    }
};

module.exports = resolvers;