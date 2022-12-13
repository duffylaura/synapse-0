const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        define: String
        email: String
        password: String 
        memberships: [String]
    }

    type Group {
        _id: ID
        name: String
        owner: User
        members: [User]
       
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        group: [Group]
        user: User
        users: [User]
        singleUserGroups(userID:ID!): User
        allUsersInAGroup(groupID:ID!): Group
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addGroup(name: String!): Group
        addMembers(groupID:ID!, newMemberID: ID!): Group
        removeUser(userID: ID!): User
        removeGroup(groupID: ID!, userID: ID!): Group
    }
`;

module.exports = typeDefs;
