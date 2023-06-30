import React, {createContext,useMemo,useState} from "react";
import Context2 from "./ExContext2";

export const UserContext =createContext({
    setLoggedIn: () =>{},
    setLoading: () =>{},
});
const Context1 = () => {
    const [loggedIn,setLoggedIn] = useState(false);
    const [loading,setLoading] = useState(false);
    const value = useMemo(()=>({setLoggedIn,setLoading})
        ,[setLoggedIn,setLoading]);
    return(
        <UserContext.Provider value={value}>
            <Context2 />
            <div>{loggedIn?'로그인':'로그아웃'}</div>
            <div>{loading?'로딩중':'로딩완료'}</div>
        </UserContext.Provider>
    )
}
export default Context1;