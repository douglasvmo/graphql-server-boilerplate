import { startServer } from "./src/server";
import resolvers from "./src/graphql/resolvers";
import typeDefs from "./src/graphql/typeDefs";

startServer({ resolvers, typeDefs });
