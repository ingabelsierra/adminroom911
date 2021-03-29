import React from 'react'

    const List = ({ admins }) => {
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
          <center><h3>Lista de Admins Room 911</h3></center>
          {admins.map((admin) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{admin.email}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{admin.name}</h6>
                <p class="card-text">{admin.last_name}</p>
              </div>
            </div>
          ))}
        </div>

    </>        
      )
    };

    export default List