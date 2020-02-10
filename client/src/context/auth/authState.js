import React,{useReducer} from "react"
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import axios from "axios"

const AuthState =(props)=>{
    const initialState = {
        count:30,
        loading:true,
        post:[]
    }
    
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const Increment = ()=>{
        dispatch({
            type:"add",
            payload:initialState
        })
    };

    const getData=async()=>{
        const post = await axios.get("https://jsonplaceholder.typicode.com/posts");
        dispatch({
            type:"LOAD_POST",
            payload:post.data
        })
    }

    // Load User
    return(<AuthContext.Provider
       value={
       {
           alert:state,
           Increment,
           getData
       }
       }>
            {props.children}
      </AuthContext.Provider>
        )

}

export default AuthState;