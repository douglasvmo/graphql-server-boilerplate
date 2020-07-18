import { mergeResolvers, loadFilesSync } from "graphql-tools";
import path from "path";

const resolveArray = loadFilesSync(path.join(__dirname, "module"), {
  extensions: ["js", "ts"],
});

export default mergeResolvers(resolveArray);
