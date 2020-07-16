import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import config from "../config.json";

interface config {
  typeDefs: any;
  resolvers: any;
}

export function startServer({ typeDefs, resolvers }: config) {
  mongoose.connect(config.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`Server started at ${url}`));
}
