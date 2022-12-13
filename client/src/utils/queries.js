import { gql } from '@apollo/client';

export const QUERY_GROUP = gql `
    query singleGroup {
        group {
            _id
            name
            owner
            members {
                _id
                username
                define
                email
            }
        }
    }
`

export const QUERY_USER = gql `
    query singleUser { 
        user {
            _id
            username
            define
            email
            memberships {
                _id
                name
            }
        }
    }
`;

export const QUERY_USERS = gql `
    query multipleUsers {
        users {
            _id
            username
            define
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