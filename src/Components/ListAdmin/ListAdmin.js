import React from 'react'
import axios from "axios"
import config from "../../config"
import List from './List'

class ListEmployee extends React.Component { 

  state = {
    admins: []
  }  

  componentDidMount() {
    this.getAdmins();
    
  }

  getAdmins = async () => { 

      const instance = axios.create({
      baseURL: `${config.baseUrl}`,
      timeout: 3000,
      headers: { Authorization: "Bearer " + localStorage.getItem('token') },
    }); 

    instance
      .get("/api/users")
      .then((response) => {        
        return response.data;
      })
      .then((data) => {
        this.setState({ admins: data })
        console.log(data);
        
      },
      (err) => {       
        alert("Error");
      });
  };  

  render() {

    return (

      <List admins={this.state.admins} /> 
    );
  }
}

export default ListEmployee;
