import { mergeTypeDefs, loadFilesSync } from "graphql-tools";
import { GraphQLSchema } from "graphql";
import path from "path";

const typesArray: Array<GraphQLSchema> = loadFilesSync(
  path.join(__dirname, "module"),
  { extensions: ["gql"] }
);

console.log(typesArray);

export default mergeTypeDefs(typesArray);
