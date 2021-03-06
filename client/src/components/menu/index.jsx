import React from "react";
import {NavLink} from "react-router-dom"
import "./style.css"
const logOut=()=>{
    localStorage.setItem("isMasterAuthenticated",false);
    window.location.href="/login"
}

function Menu(){
    return(<div>
        <img src="https://www.repairkaki.com/static/media/repairkaki_logo.696698f3.png"  className="menuLogo" alt="repairkaiLogo"/>
        <ul className="dashboardMenu">
            <li><NavLink to="/" activeClassName="menuActive" exact>Dashboard</NavLink></li>
            <li><NavLink to="/partners" activeClassName="menuActive">Partners</NavLink></li>
            <li><NavLink to="/users" activeClassName="menuActive">Users</NavLink></li>
            <li><NavLink to="/requests" activeClassName="menuActive">All Request</NavLink></li>
            <li><a onClick={logOut}>Log out</a></li>


        </ul>
    </div>)
}

export default Menu