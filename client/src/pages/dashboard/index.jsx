import React,{useContext,useEffect} from "react";
import { Doughnut } from 'react-chartjs-2';
import PartnerContext from "../../context/partners/partnerContext"
import "./style.css"


function Dashboard(){

    const partnerContext = useContext(PartnerContext);
    useEffect(()=>{
        partnerContext.LoadDashboard()
            // eslint-disable-next-line
    },[])

    const {dashboard}=partnerContext.state;
    return(
        <div>
            <div className="chartsArea">

                <div>
                    <Doughnut
                
                        data={
                            {
                                labels:["Total Users", "Total Partners"],
                                datasets:[
                                    {
                                        data:[dashboard.totalUser,dashboard.totalPartner],
                                        backgroundColor:["#dc3545","#ccc"]
                                    }
                                ]
                            }
                        }
                        options={
                            {
                                responsive: true,
                                maintainAspectRatio: true,        
                            }
                        }
                    />
                </div> 
                <div>
                    <Doughnut
                
                        data={
                            {
                                labels:["Weekly Growth Users","Weekly Growth Partners"],
                                datasets:[
                                    {
                                        data:[dashboard.weeklyUserGrowth,dashboard.weeklyPartnerGrowth],
                                        backgroundColor:["#dc3545","#ccc"]
                                    }
                                ]
                            }
                        }
                        options={
                            {
                                responsive: true,
                                maintainAspectRatio: true,        
                            }
                        }
                    />
                </div> 
                <div>
                    <Doughnut
                
                        data={
                            {
                                labels:["Total Active Users Monthly","Total Active Partner Monthly"],
                                datasets:[
                                    {
                                        data:[dashboard.totalActiveUserMonthy,dashboard.totalActiveParterMonthly],
                                        backgroundColor:["#dc3545","#ccc"]
                                    }
                                ]
                            }
                        }
                        options={
                            {
                                responsive: true,
                                maintainAspectRatio: true,        
                            }
                        }
                    />
                </div> 
                <div>
                    <Doughnut
                        data={
                            {
                                labels:["Total Active Users Weekly","Total Active Partners Weekly"],
                                datasets:[
                                    {
                                        data:[dashboard.totalActiveUserWeekly,dashboard.totalActiveParterWeekly],
                                        backgroundColor:["#dc3545","#ccc"]
                                    }
                                ]
                            }
                        }
                        options={
                            {
                                responsive: true,
                                maintainAspectRatio: true,        
                            }
                        }
                    />
                </div> 
                     
                
                       
            </div>

            <div className="AnaylyticsArea">

                <div >
                    <h4>Engaements</h4>
                    <hr/>
                    <p>{dashboard.totalRequesWeekly} of request has been made last 7 days</p>
                    <p>{dashboard.totalRequesMonthly} of request has been made last 30 days</p>
                </div>

                <div>
                    <h4>Successful Repair</h4>
                    <hr/>
                    <p>{dashboard.totalAppointmentWeekly} of appoinments has been made  in last 7 days</p>
                    <p>{dashboard.totalAppointmentMonthly} of Appointment has been made last 30 days</p>
                </div>

                <div>
                    <h4>Partner Revenue</h4>
                    <hr/>
                    <p>All time- total revenue by all partners</p>
                    <h4>${dashboard.AllTimeRevenu}</h4>
                    <hr/>
                    <p>Last 7 days- total revenue by all partners</p>
                    <h4>${dashboard.TotalWeeklyRevenue}</h4>

                </div>
              
            </div>
        </div>
    )
}

export default Dashboard;