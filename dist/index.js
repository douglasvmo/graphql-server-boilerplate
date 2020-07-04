"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = apollo_server_1.gql `
  type Query {
    hello: String
  }
`;
const resolvers = {
    Query: {
        hello: () => "Hello world",
    },
};
const server = new apollo_server_1.ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server started at ${url}`));
