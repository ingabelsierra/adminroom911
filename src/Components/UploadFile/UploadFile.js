import React from "react";
import axios from "axios";
import config from "../../config"

class UploadFile extends React.Component {
  
  state = {
    file: null,
    base64URL: ""
  };

  uploadFile = async (fileBase64) => {      

    const stringBase64 = fileBase64.split(','); 

    const request = {
      file: stringBase64[1],      
    };

    const instance = axios.create({
      baseURL: `${config.baseUrl}`,
      timeout: 3000,
      headers: { Authorization: "Bearer " + localStorage.getItem('token') },
    }); 

    instance
      .post("/api/employees",request)
      .then((response) => {        
        return response.data;
      })
      .then((data) => {
        console.log(data);
        
      },
      (err) => {       
        alert("Error");
      });
  }; 

  getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
    
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);
     
      reader.onload = () => {
   
        //console.log("Called", reader);
        baseURL = reader.result;
        //console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  handleFileInputChange = e => {
    //console.log(e.target.files[0]);
    let { file } = this.state;

    file = e.target.files[0];

    this.getBase64(file)
      .then(result => {
        file["base64"] = result;
        //console.log("Base 64: ", file["base64"]);
        this.setState({
          base64URL: result,
          file
        });
        //subimos el archivo
        this.uploadFile(file["base64"]);
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      file: e.target.files[0]
    });
  };

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
      <center><h1>Cargar Archivo Empleados CSV</h1></center>      
      
        <div class="card">
          <div class="card-body">               
          <div>
        <input type="file" name="file" onChange={this.handleFileInputChange} />
         </div>
          </div>
        </div>        
     
    </div>
    </>
    );
  }
}

export default UploadFile;
