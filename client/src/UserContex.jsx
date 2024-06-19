import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [user, setUser]= useState(null);
    const [ready, setReady] = useState(false);
    // const[logoutCheck, setLogoutCheck] = useState(false);

    useEffect(()=>{

        async function fetchData(){
          try {
            const {data} = await axios.get('/profile',{ withCredentials: true });
             setUser(data);
             setReady(true);
          } catch (error) {
            console.log(error);
          }

        }

       if(!user){
       fetchData();
       }
    },[]);
    return (
        <UserContext.Provider value={{user, setUser,ready}}>
            {children};
        </UserContext.Provider>
    );
}