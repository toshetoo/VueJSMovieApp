import gql from 'graphql-tag';
import graphqlClient from './graphqlClient';

export default {

    getList(entity, params, success, failure) {
        console.error('SEND QUERY');
        graphqlClient.query({
            query: gql`
                    query {
                        ${entity} {
                            ${params}
                        }
                    }
                `
        }).then((res) => {
            console.log('RESP');
            success(res.data[entity]);
        }).catch(failure);
    },

    add(entity, variables, success, failure) {
        graphqlClient.mutate({
            mutation: gql`mutation($name: String!, $about: String, $picture: String!, $gender: String!, $eyeColor: String!, $age: String!, $isSold: Boolean!){
                    add${entity}(name: $name, about: $about, picture: $picture, gender: $gender, eyeColor: $eyeColor, age: $age, isSold: $isSold){
                        name
                        about
                        picture
                        gender
                        eyeColor
                        age
                        isSold
                    }    
                }`,
            variables,
        }).then((response) => {
            success(response);
        }).catch(failure);
    },

    delete(entity, _id, success, failure) {
        graphqlClient.mutate({
            mutation: gql`
                mutation($_id: String!){
                    delete${entity}(_id: $_id){
                        _id
                    }
                }
                `,
            variables: {
                _id
            }
        }).then((response) => {
            success(response);
        }).catch(failure);
    },
    save(entity, variables, success, failure) {
        graphqlClient.mutate({
            mutation: gql`mutation($name: String!, $about: String, $picture: String!, $gender: String!, $eyeColor: String!, $age: String!, $isSold: Boolean!){
                edit${entity}(name: $name, about: $about, picture: $picture, gender: $gender, eyeColor: $eyeColor, age: $age, isSold: $isSold){
                    name
                    about
                    picture
                    gender
                    eyeColor
                    age
                    isSold
                }    
            }`,
            variables
        }).then((response) => {
            success(response);
        }).catch(failure);
    },
}