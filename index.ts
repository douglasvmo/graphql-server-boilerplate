import { ApolloServer, gql, IResolvers } from "apollo-server";
import users from "./users";

const typeDefs = gql`
  type Query {
    hello: String
    users: [User!]!
    getUserByEmail(email: String!): User!
  }
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }
`;

const resolvers: IResolvers = {
  Query: {
    hello: () => "Hello world",
    users: () => users,
    getUserByEmail: (_, args) => {
      return users.find((user) => user.email === args.email);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server started at ${url}`));
