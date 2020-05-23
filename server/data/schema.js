    // data/schema.js

    // Define our schema using the GraphQL schema language
    const {  gql } = require('apollo-server');
    const typeDefs = gql `
      type User {
        id: Int!
        firstname: String!
        lastname: String!
        phone: String!
      }

      type Query {
        me: User
      }

      type Mutation {
        signup (verify:String!,firstname: String!, lastname: String!, phone: String!): AuthPayload
        checkphone (verify:String!, phone: String!): AuthPayload
        login (verify:String!, phone:String!,otp:String!, hash:String! ): AuthPayload
        
      }
      type AuthPayload {
        status: Boolean
        code: String
        token: String
    }
    `
    module.exports =  typeDefs