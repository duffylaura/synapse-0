const { AuthenticationError } = require('apollo-server-express');
// const { getOperationRootType } = require('graphql');
const { Group, User} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async() => {
            return await User.find();
        },
        user: async(parent,args,context)=> {
            if (context.user){return (User.findOne({_id:context.user._id}));
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        group: async() => {
            return await Group.find();
        },
        singleUserGroups: async (parent, { userID }) => {
            return User.findOne({_id: userID});
        },
        //to look at later. outputting array of group names directly.
        allUsersInAGroup: async (parent, { groupID }) => {
            return Group.findOne ({ _id: groupID});
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user); 
            return { token, user };
        },
        login: async (parent, {username, password}) => {
            const user = await User.findOne({username});
            if (!user) {throw new AuthenticationError('No username found!')}
            const correctPassword = await user.isCorrectPassword(password); 
            if (!correctPassword) {throw new AuthenticationError('Password not correct!')}
            const token = signToken(user);
            return { token, user }; 
        },
        addGroup: async (parent, { name, ownerID, members }) => {
            return Group.create({ name, ownerID, members });
        },
        addMembers: async  (parent, { groupID, newMemberID }) => {
            return Group.findOneAndUpdate(
                { _id: groupID },
                { 
                    $addToSet: { newMemberID: { newMemberID } },
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