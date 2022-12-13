import { gql } from '@apollo/client';

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

export const ADD_GROUP = gql `
    mutation addGroup($name: String!) {
        addGroup(name: $name){
            _id
            name
            owner
            members {
                username
                define
                email
            }
        }
    }
`;


export const ADD_MEMBERS = gql `
    mutation addMembers($groupID: ID!, $newMemberID: ID!) {
        addGroup(groupID: $groupID, newMemberID: $newMemberID)
    }
`;

export const REMOVE_MEMBER_FROM_GROUP = gql `
    mutation removeMemberFromGroup ($groupID: ID!, $userID: ID!){
        removeMemberFromGroup (groupID: $groupId, userID: $userID)
    }
`;

export const DELETE_USER = gql `
    mutation deleteUser($userID: ID!){
        deleteUser(userID: $userID)
    }
`;

export const DELETE_GROUP = gql `
    mutation deleteGroup($groupID: ID!){
        deleteUser(groupID: $groupID)
    }
`;



