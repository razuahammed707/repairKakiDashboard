import React,{useReducer} from "react"
import PartnerContext from "./partnerContext";
import PartnerReducer from "./partnerReducer";
import axios from "axios"

    const baseURL="http://repairkaki.com"

    const PartnerState =(props)=>{
    const initialState = {
        count:30,
        loading:true,
        partners:[],
        users:[],
        requests:[],
        dashboard:{},
        allQuotes:[]
    }
    
    const [state, dispatch] = useReducer(PartnerReducer, initialState);
  

    const LoadPartners=async()=>{
        state.loading=true;
        const post = await axios.post(`${baseURL}/masterAdmin/partner/all`);
        dispatch({
            type:"LOAD_PARTNER",
            payload:post.data.data
        })
    };

    const LoadUsers = async()=>{
        state.loading=true;
        const post = await axios.post(`${baseURL}/masterAdmin/users/all`);
        dispatch({
            type:"LOAD_USER",
            payload:post.data.data
        })

    };

    const LoadAllRequest = async()=>{
        state.loading=true;
        const post = await axios.post(`${baseURL}/masterAdmin/request/all`);
        dispatch({
            type:"LOAD_REQUEST",
            payload:post.data.data
        })

    }
    const changeActiveStatus=async(id,status)=>{
         await axios.put(`${baseURL}/masterAdmin/partner/activeStatus`,{id,status});
        LoadPartners()
    };
    const LoadDashboard = async()=>{
        const DashboardData= await axios.post(`${baseURL}/masterAdmin/partner/matrix`);
        dispatch({
            type:"LOAD_DASHBOARD",
            payload:DashboardData.data
        })
    }

    const loadAllQuotes=async(_id)=>{
        state.loading=true;
        const loadData = await axios.post(`${baseURL}/masterAdmin/request/all_quotes`,{_id});
        dispatch({
            type:"LOAD_ALL_QUOTES",
            payload:loadData.data
        })
    }
   
    const setLoading=(data)=>{
        dispatch({
            type:"SET_LOADING",
            payload:data
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
            LoadDashboard,
            loadAllQuotes,
            setLoading
         }
       }>
            {props.children}
      </PartnerContext.Provider>
        )

}

export default PartnerState;