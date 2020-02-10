import React,{useReducer} from "react"
import PartnerContext from "./partnerContext";
import PartnerReducer from "./partnerReducer";
import axios from "axios"

const PartnerState =(props)=>{
    const initialState = {
        count:30,
        loading:true,
        partners:[],
        users:[],
        requests:[]
    }
    
    const [state, dispatch] = useReducer(PartnerReducer, initialState);
  
   

    const LoadPartners=async()=>{
        state.loading=true;
        const post = await axios.post("/masterAdmin/partner/all");
        dispatch({
            type:"LOAD_PARTNER",
            payload:post.data.data
        })
    };

    const LoadUsers = async()=>{
        state.loading=true;
        const post = await axios.post("/masterAdmin/users/all");
        dispatch({
            type:"LOAD_USER",
            payload:post.data.data
        })

    };

    const LoadAllRequest = async()=>{
        state.loading=true;

        const post = await axios.post("/masterAdmin/requests/all");
        dispatch({
            type:"LOAD_REQUEST",
            payload:post.data.data
        })

    }
    const changeActiveStatus=async(id,status)=>{
         await axios.put("/masterAdmin/partner/activeStatus",{id,status});
        LoadPartners()

    }

    

    // Load User
    return(<PartnerContext.Provider
       value={
        {
            state,
            LoadPartners,
            LoadUsers,
            changeActiveStatus,
            LoadAllRequest
         }
       }>
            {props.children}
      </PartnerContext.Provider>
        )

}

export default PartnerState;