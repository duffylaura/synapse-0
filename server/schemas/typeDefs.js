const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        define: String
        email: String
        password: String 
        memberships: [Group]!
    }

    type Group {
        _id: ID
        name: String
        owner: User
        members: [User]!
       
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        group: [Group]
        user: User
        users: [User]

    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addGroup(name: String!): Group
        addMembers(groupID:ID!, newMemberID: ID!): Group
        removeMemberFromGroup(groupID: ID!, userID: ID!): Group
        deleteUser(userID: ID!): User
        deleteGroup(groupID: ID!): Group
    }
`;

module.exports = typeDefs;
