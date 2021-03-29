import React from "react";
//import axios from "axios";
//import config from "../../config"

class ReportPDF extends React.Component {
  

  /*donwnloadFile = async () => {      
   
    const instance = axios.create({
      baseURL: `${config.baseUrl}`,
      timeout: 3000,
      headers: { Authorization: "Bearer " + localStorage.getItem('token') },
    }); 

    instance
      .get("/api/generate-pdf")
      .then((response) => {        
        return response.data;
      })
      .then((data) => {
        console.log(data);
        
      },
      (err) => {       
        alert("Error");
      });
  };*/


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

    <div>
          <center><h3>Reporte Empleados Room 911 PDF</h3></center>          
          
            <div class="card">
              <div class="card-body">               
                <p><a className="nav-link" href="http://localhost/room911/public/api/generate-pdf">Descargar</a></p>
              </div>
            </div>         
         
        </div>
    </>
    );
  }
}

export default ReportPDF;
