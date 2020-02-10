import React,{useContext }from "react";
import AuthState from "../context/auth/authState";
import AuthContext from "../context/auth/authContext"

function Alert(){
    const authContext = useContext(AuthContext);
    console.log(authContext)
    return(<div>

       <p>{authContext.alert.count}</p>
       <button onClick={authContext.getData}>+</button>
    </div>)
}

export default Alert
