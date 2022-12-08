const { AuthenticationError } = require('apollo-server-express');
const { Group, User, Network} = require('../models');

const resolvers = {
    Query: {
        group: async () => {
            return await Group.find({});
        },
        users: async() => {
            return await User.find();
        },
        user: async(parent,args,context)=> {
            if (context.user){return (User.findOne({_id:context.user._id}));
            }
            throw new AuthenticationError("You need to be logged in!");

        },
        network: async () => {
            return await Network.find();
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user); 
            return (token, user)
        },
        login: async (parent, {username, password}) => {
            const user = await User.findOne({username});
            if (!user) {throw new AuthenticationError('No username found!')}
            const correctPassword = await user.isCorrectPassword(password); 
            if (!correctPassword) {throw new AuthenticationError('Password not correct!')}
            const token = signToken(user);
            return (token, user); 
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