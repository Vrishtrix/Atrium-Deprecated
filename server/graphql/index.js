
const { ApolloServer } = require('apollo-server-azure-functions');
const typeDefs = require('../data/schema')
const resolvers = require("../data/resolvers")
const server = new ApolloServer({
    typeDefs, resolvers, introspection: true,
    playground: true,
});

// The `listen` method launches a web server.
exports.graphqlHandler = server.createHandler();