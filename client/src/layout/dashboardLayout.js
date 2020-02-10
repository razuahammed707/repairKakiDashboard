import React from "react";
import Header from "../components/header/index";
import Menu from "../components/menu/index"
import "./style.css"
import Partner from "../pages/partners/index"
import Dashboard from "../pages/dashboard/index"
import {Route} from "react-router-dom"
import Users from "../pages/users/index"
import Request from "../pages/requests/index";
import RequestDetails from "../pages/requestDetails/index";


function DashboardLayout(){
    return(<div className="DasboardGrid">

        <div className="MenuContainer">
            <Menu/>
        </div>

        <div className="contentArea">
            <Header/>
            <div className="dashboardContainer">
                <Route path="/" exact component={Dashboard}/>
                <Route path="/partners" component={Partner}/>
                <Route path="/users" component={Users}/>
                <Route path="/requests" component={Request}/>
                <Route path="/request/:id" component={RequestDetails}/>



            </div>
        </div>
        
    </div>)
}

export default DashboardLayout