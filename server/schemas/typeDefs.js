const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String 
    }

    type Group {
        _id: ID
        name: String
        users: [User]
    }

    type Network {
        _id: ID
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        user: User
        users: [Users]
        group(ownerID:ID!): [Group]
        network(ownerID:ID!): [Network]
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addGroup(name: String!, ownerID: ID!): Group
        updateGroup(name: String!, ownerID: ID!): Group
        removeUser(userID: ID!): User
        removeGroup(groupID: ID!, userID: ID!): Group
    }
`;

module.exports = typeDefs;