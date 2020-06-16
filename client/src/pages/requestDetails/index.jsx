import React,{useContext, useEffect} from "react";
import "./style.css"
import PartnerContext from "../../context/partners/partnerContext"
import CircularProgress from '@material-ui/core/CircularProgress';



function RequestDetails(props){
    const partnerContext = useContext(PartnerContext);
            
    const {loadAllQuotes,setLoading}=partnerContext;
    const {allQuotes,loading}=partnerContext.state;
    console.log(loading)
    console.log(allQuotes)



    useEffect(()=>{
        setLoading(true)
        loadAllQuotes(props.match.params.id)
    },[])


    if(loading===false && allQuotes.submittedQuotes){
        return( <div className="RequestContainer">
        <h3>All Quotation</h3>
        <hr/>
        <div className="grid-3">
            {(allQuotes.submittedQuotes.length===0?"No application found":
            allQuotes.submittedQuotes.map((item,key)=>{
                return(
                <div key={key} className="quotationBox">
                  <p>Bid : <b>${item.bid}</b></p> 
                  <p>Comments: <b>{item.comments}</b></p>
                  <p>Lead time: <b>{item.leadTime}</b></p>
                  <p>Submitted by: <b>{item.quotationBy.name}</b></p>
                {(item.appoinmented===true?<span class="badge badge-pill badge-success">Appoinmented</span>:"")}

                </div>)
            })
            )}
            
        </div>
    </div>)
    }else{
       
        return(
            <div className="RequestContainer">
                      <CircularProgress/>
            </div>
        )

    }
    
   
    
}

export default RequestDetails;