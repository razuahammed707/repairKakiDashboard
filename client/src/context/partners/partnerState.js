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
        requests:[],
        dashboard:{}
    }
    
    const [state, dispatch] = useReducer(PartnerReducer, initialState);
  
   

    const LoadPartners=async()=>{
        state.loading=true;
        const post = await axios.post("https://repairkaki.com/masterAdmin/partner/all");
        dispatch({
            type:"LOAD_PARTNER",
            payload:post.data.data
        })
    };

    const LoadUsers = async()=>{
        state.loading=true;
        const post = await axios.post("https://repairkaki.com/masterAdmin/users/all");
        dispatch({
            type:"LOAD_USER",
            payload:post.data.data
        })

    };

    const LoadAllRequest = async()=>{
        state.loading=true;

        const post = await axios.post("https://repairkaki.com/masterAdmin/requests/all");
        dispatch({
            type:"LOAD_REQUEST",
            payload:post.data.data
        })

    }
    const changeActiveStatus=async(id,status)=>{
         await axios.put("https://repairkaki.com/masterAdmin/partner/activeStatus",{id,status});
        LoadPartners()

    };


    const LoadDashboard = async()=>{

        const DashboardData= await axios.post("https://repairkaki.com/masterAdmin/partner/matrix");
        // console.log(DashboardData.data)
        dispatch({
            type:"LOAD_DASHBOARD",
            payload:DashboardData.data
        })

    }

    

    // Load User
    return(<PartnerContext.Provider
       value={
        {
            state,
            LoadPartners,
            LoadUsers,
            changeActiveStatus,
            LoadAllRequest,
            LoadDashboard
         }
       }>
            {props.children}
      </PartnerContext.Provider>
        )

}

export default PartnerState;