import { createContext, useState } from "react";

export const UserContexts= createContext({})

const UsersProvider=({children})=>{
const [users, setUsers]=useState([
    {id:1, username: 'rahman'},
    {id:2, username: 'abdur'}
   
])

 return <UserContexts.Provider value={{users,setUsers}}>
    {children}
</UserContexts.Provider>
}
export default UsersProvider;
