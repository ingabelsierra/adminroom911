import React from "react";
import RegisterAdmin from './RegisterAdmin';
//import axios from "axios";
//import config from "../../config"

class Register extends React.Component {
  


  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">        
                
        </ul>
        <span className="navbar-text"><span
              className="nav-link cursor-pointer">              
              <a className="nav-link" href="/Dashboard"> Dashboard</a>
            </span></span>
      </div>
    </nav>

    <RegisterAdmin></RegisterAdmin>
   
    </>
    );
  }
}

export default Register;
