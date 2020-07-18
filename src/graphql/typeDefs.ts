import { mergeTypeDefs, loadFilesSync } from "graphql-tools";
import { GraphQLSchema } from "graphql";
import path from "path";

const typesArray: GraphQLSchema[] = loadFilesSync(
  path.join(__dirname, "module"),
  { extensions: ["gql"] }
);

export default mergeTypeDefs(typesArray);
