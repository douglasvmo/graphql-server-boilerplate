import UserProvider from "../../../models/Users";

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    active: boolean;
}
interface TArgs {
    id: string;
    data: User
}



export default{

    User: {
        fullName: (user: User)=> `${user.firstName} ${user.lastName}`

    },
    Query: {
        users: () => UserProvider.find(),
        user: (parent:any, {id}:TArgs) => UserProvider.findById(id),
    },
    Mutation:{
        createUser:(parent:any, {data}:TArgs) => UserProvider.create(data),
        updateUser: (parent: any, {id, data}: TArgs ) => UserProvider.findByIdAndUpdate(id, data, {new: true}),
        deleteUser: async (parent: any, {id}: TArgs) => !!(UserProvider.findByIdAndDelete(id))
    }
}
