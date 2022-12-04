const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }

    type Group {
        _id: ID
        name: String
        ownerID: User
        users: [User]
    }

    type Network {
        _id: ID
        networkName: String
        userId: User
    }

    type Query {
        user: [User]
        group: [Group]
        network: [Network]
    }

    type Mutation {
        addUser(username: String!, email: String!): User
        addGroup(name: String!, ownerID: ID!): Group
        updateGroup(name: String!, ownerID: ID!): Group
        removeUser(userID: ID!): User
        removeGroup(groupID: ID!, userID: ID!): Group
    }
`;

module.exports = typeDefs;