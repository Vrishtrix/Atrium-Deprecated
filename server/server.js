
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./data/schema')
const resolvers = require("./data/resolvers")
 const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});