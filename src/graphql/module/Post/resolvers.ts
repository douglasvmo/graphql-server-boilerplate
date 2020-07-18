import PostProvider from "../../../models/Post";
import UserProvider from "../../../models/Users";


interface Post {
    title: string;
    content: string;
    author: string;
}
interface TArgs {
    id: string;
    data: Post;
}



export default{

    Post: {
        author: (post:Post) => UserProvider.findById(post.author)
    },
    Query: {
        posts: () => PostProvider.find(),
        post: (parent:any, {id}:TArgs) => PostProvider.findById(id),
    },
    Mutation:{
        createPost:(parent:any, {data}:TArgs) => PostProvider.create(data),
        updatePost: (parent: any, {id, data}: TArgs ) => PostProvider.findByIdAndUpdate(id, data, {new: true}),
        deletePost: async (parent: any, {id}: TArgs) => !!(PostProvider.findByIdAndDelete(id))
    }
}
