import React,{useState,useEffect} from "react";
import "./style.css"
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios"

function RequestDetails(props){
    // const [requestDetails,setRequest]=useState({})
    // const [allQuotation,setQuotation]=useState([]);
    
    // const loadRequest = async()=>{
    //     const request = await axios.post("http://localhost:5000/masterAdmin/requests/find",{id:"5e3f0f4b112b0b6b217e0342"});
    //     setRequest(request.data.data.request);
    //     setQuotation(request.data.data.allQuoation)
    // }  

    // useEffect(()=>{
    //     loadRequest()
    // },[]);
    // console.log(requestDetails)
    return(
        <div className="RequestContainer">
            {/* <Carousel>
                {
                    requestDetails.pictures.map(item=>{
                    })
                }
            
            </Carousel>
            <p>{requestDetails.problemType}</p> */}
        </div>
    )
}

export default RequestDetails;