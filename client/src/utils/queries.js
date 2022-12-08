import { gql } from '@apollo/client';

export const QUERY_USER = gql `
    query singleUser { 
        user {
            _id
            username
            email
        }
    }
`;

export const QUERY_USERS = gql `
    query multipleUsers {
        users {
            _id
            username
            email
        }
    }
`;

export const QUERY_SINGLE_USER_GROUPS = gql `
    query singleUserGroups($userID:ID!) {
        singleUserGroups(userID: $userID) {
            _id
            memberships
        }
    }
`;

export const QUERY_ALL_USERS_IN_A_GROUP = gql `
    query allUsersInAGroup ($groupID: ID!){
        allUsersInAGroup (groupID: $groupID) {
            _id
            name
            ownerID
            members
        }
    }
`;

// id is referring to user ID, name is group name, username is users username