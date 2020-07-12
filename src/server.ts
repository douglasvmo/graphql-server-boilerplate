import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import env from "../env";

interface config {
  typeDefs: any;
  resolvers: any;
}

export function startServer({ typeDefs, resolvers }: config) {
  mongoose.connect(env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`Server started at ${url}`));
}
