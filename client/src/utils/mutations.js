import { gql } from '@apollo/client';

export const LOGIN = gql `
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password){
            token
            user{
                _id
            }
        }
    }
`;

export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token 
            user{
                _id
            }
        }
    }
`;

export const ADD_GROUP = gql `
    mutation addGroup($name: String!, $ownerID: ID!) {
        addGroup(name: $name, ownerID: $ownerID)
    }
`;

export const UPDATE_GROUP = gql `
    mutation updateGroup($name: String!, $ownerID: ID!){
        updateGroup(name: $name, ownerID: $ownerID)  
    }
`;

export const REMOVE_USER = gql `
    mutation removeUser($userID: ID!){
        removeUser(userID: $userID)
    }
`;

export const REMOVE_GROUP = gql `
    mutation removeGroup ($groupID: ID!, $userID: ID!){
        removeGroup (groupID: $groupId, userID: $userID)
    }
`;

module.exports = typeDefs; 