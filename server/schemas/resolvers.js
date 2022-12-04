const { Group, User, Network} = require('../models');

const resolvers = {
    Query: {
        group: async () => {
            return await Group.find({}).populate('users');
        },
        user: async() => {
            return await User.find();
        },
        network: async () => {
            return await Network.find();
        },
    },

    Mutation: {
        addUser: async (parent, { username, email }) => {
            return User.create({ username, email });
        },
        addGroup: async (parent, { name, ownerID }) => {
            return Group.create({ name, ownerID });
        },
        updateGroup: async  (parent, {name, ownerID }) => {
            return Group.findOneAndUpdate(
                { _id: ownerID },
                { 
                    $addToSet: { name: { name } },
                },
                {
                  new: true,
                  runValidators: true,
                }
            );
        },
        removeUser: async (parent, { userID }) => {
            return User.findOneAndDelete({ _id: userID });
        },
        removeGroup: async (parent, { groupID, userID }) => {
            return Group.findOneAndUpdate(
                { _id: groupID },
                { $pull : { users: { _id: userID } } },
                { new: true }
            );
        },
    },    
};

module.exports = resolvers;