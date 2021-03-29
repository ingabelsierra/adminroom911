import React from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import RegisterAdmin from "./Components/RegisterAdmin/Register";
import RegisterEmployee from "./Components/RegisterEmployee/Register";
import ListEmployee from "./Components/ListEmployee/ListEmployee";
import ReportPDF from "./Components/Report/ReportPDF";
import UploadFile from "./Components/UploadFile/UploadFile";
import ListAdmin from './Components/ListAdmin/ListAdmin'
import NotFound from "./Components/NotFound/NotFound";

const authGuard = (Component) => () => {
  return localStorage.getItem("token") ? (
    <Component />
  ) : (
    <Redirect to="/login" />
  );
};
const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
   
      <Route path="/dashboard" render={authGuard(Dashboard)}></Route>
      <Route path="/registerAdmin" render={authGuard(RegisterAdmin)}></Route>
      <Route path="/listAdmin" render={authGuard(ListAdmin)}></Route> 
      <Route path="/registerEmployee" render={authGuard(RegisterEmployee)}></Route> 
      <Route path="/listEmployee" render={authGuard(ListEmployee)}></Route>  
      <Route path="/report-pdf" render={authGuard(ReportPDF)}></Route>  
      <Route path="/upload-file" render={authGuard(UploadFile)}></Route>      

      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
