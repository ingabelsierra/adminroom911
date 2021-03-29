import React from 'react'
import axios from "axios"
import config from "../../config"
import List from './List'

class ListEmployee extends React.Component { 

  state = {
    employees: []
  }  

  componentDidMount() {
    this.getEmployees();
    
  }

  getEmployees = async () => { 

      const instance = axios.create({
      baseURL: `${config.baseUrl}`,
      timeout: 3000,
      headers: { Authorization: "Bearer " + localStorage.getItem('token') },
    }); 

    instance
      .get("/api/employees")
      .then((response) => {        
        return response.data;
      })
      .then((data) => {
        this.setState({ employees: data })
        console.log(data);
        
      },
      (err) => {       
        alert("Error");
      });
  };
  
  searchEmployee = async (text) => { 

    //console.log(text)
    const instance = axios.create({
    baseURL: `${config.baseUrl}`,
    timeout: 3000,
    headers: { Authorization: "Bearer " + localStorage.getItem('token') },
  }); 

  instance
    .get("/api/employees?search="+text)
    .then((response) => {        
      return response.data;
    })
    .then((data) => {
      this.setState({ employees: data })
      console.log(data);
      
    },
    (err) => {       
      alert("Error");
    });
};

  render() {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (

     <>
     <div>
     <center><input 
     style={BarStyling}
     placeholder={"Buscar Empleado"}
     onChange={(e) => this.searchEmployee(e.target.value)}
    /></center>
    </div>

    <List employees={this.state.employees} /> 

      </>
    );
  }
}

export default ListEmployee;
