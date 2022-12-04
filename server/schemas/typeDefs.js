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
        group(id: ID!): Group
    }
`;

module.exports = typeDefs;