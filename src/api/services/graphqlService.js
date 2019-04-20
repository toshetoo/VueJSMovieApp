import gql from 'graphql-tag';
import graphqlClient from './graphql/graphqlClient';

export default {

    async getUsersList(params, success, failure) {
        try {
            const response = await graphqlClient.query({
                query: gql`
                    query {
                        users {
                            ${params}
                        }
                    }
                `
            });
            success(response);
        } catch (error){
            failure(error);    
        }
    },

    async addUser(variables, success, failure){
        try {
            const response = await graphqlClient.mutate({
                mutation: gql`mutation($username: String!,
                     $email: String!, $password: String!){
                    addUser(username: $username, 
                        email: $email, password: $password){
                        _id
                        username
                        email
                    }    
                }`,
                variables,
            });
            success(response);

        } catch (error){
            failure(error);
        }
    },

    async deleteUser(_id, success, failure){
        try {
            const response = await graphqlClient.mutate({
                mutation: gql`
                mutation($_id: String!){
                    deleteUser(_id: $_id){
                        _id
                    }
                }
                `,
                variables: {
                    _id
                }
            });
            success(response);
        } catch (error) {
            failure(error);
        }
    },
    async getGamesList(params, success, failure) {
        try {
            const response = await graphqlClient.query({
                query: gql`
                    query {
                        games {
                            ${params}
                        }
                    }
                `
            });
            success(response);
        } catch (error){
            failure(error);    
        }
    },
    async saveUser(variables, success, failure) {
        try {
            const response = await graphqlClient.mutate({
                mutation: gql`
                mutation($_id: String!, $username: String!, $email: String!,
                     $password: String!, $games: [GameInput]){
                    editUser(_id: $_id, username: $username, email: $email, 
                        password: $password, games: $games){
                        _id
                    }
                }
                `,
                variables
            });
            success(response);
        } catch (error){
            failure(error);    
        }
    },
}