import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const history = useHistory();

  const logout = () => {
    /* eslint-disable */
    const toLogout = confirm("Está seguro que desea salir de la Sesion actual ?");
    /* eslint-enable */
    if (toLogout) {
      localStorage.clear();
      history.push("/login");
    }
  };

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
         
            <li className="nav-item active">
              <a className="nav-link" href="/registerEmployee">
                Nuevo Empleado 
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/listEmployee">
                Lista Empleados 
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/registerAdmin">
                Nuevo Admin 
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/listAdmin">
                Lista Admin 
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/upload-file">
                Cargar Archivo Empleados 
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/report-pdf">
                Reporte PDF 
              </a>
            </li>         
          </ul>
          <span className="navbar-text"><span
                className="nav-link cursor-pointer"
                onClick={() => logout()}              >
                Salir
              </span></span>
        </div>
      </nav>
  
    </>
  );
};

export default Dashboard;
