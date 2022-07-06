import { createContext,useState } from "react";

const UsersContext = createContext();
export const UserProvider =({children})=>{
    const [users,setUsers]= useState([]);
 
    const getUsers= async () =>{
        const response = await fetch("/customers/all");
        const data = await response.json();
        setUsers(data);
        console.log("data",data);
        
    }

   

    return (
        
        <UsersContext.Provider
        value={{
            getUsers,
            users,

        }} >
            {children}
        </UsersContext.Provider>

        )
    }

export default UsersContext;