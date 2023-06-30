import React, { useContext } from "react";
import { UserContext } from "./ExContext1";

const Context3 = ()=>{
    const {setLoading,setLoggedIn} = useContext(UserContext);
    return(
        <>
            <button onClick={()=>setLoading((prev)=>!prev)}>
                로딩토글
            </button>
            <button onClick={()=>setLoggedIn((prev)=>!prev)}>
                로그인토글
            </button>
        </>
    )
}
export default Context3;