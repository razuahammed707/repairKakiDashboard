import React from 'react';
import './App.css';
import AuthState from "./context/auth/authState";
import ParterState from "./context/partners/partnerState";
import DashboardLayout from "./layout/dashboardLayout"
import Login from "./pages/login"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (

    <AuthState>

        <Router>
            <Switch>
              <ParterState>
                  <Route path="/login" exact component={Login}/>
                  <Route path="/"  component={DashboardLayout}></Route>
              </ParterState>
            </Switch>
        </Router>
    </AuthState>
    
  );
}

export default App;
