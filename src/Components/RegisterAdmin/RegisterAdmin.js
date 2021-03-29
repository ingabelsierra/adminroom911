import React, { useState } from "react";
import styles from "./RegisterAdmin.module.css";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import config from "../../config";


const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState();

  const onSubmit = (data, e) => {
    setMessage({
      data: "in progress...",
      type: "alert-warning",
    });
    fetch(`${config.baseUrl}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : "Bearer "+localStorage.getItem('token')
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.warn(data);
        const hasError = "error" in data && data.error != null;
        setMessage({
          data: hasError ? data.error : "Usuario admin Registrado",
          type: hasError ? "alert-danger" : "alert-success",
        });

        !hasError && e.target.reset();
      });
  };

  return (
  
    <div
      className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}
    >
      <div className={styles.registrationFormContainer}>
        {message && (
          <div
            className={`alert fade show d-flex ${message.type}`}
            role="alert"
          >
            {message.data}
            <span
              aria-hidden="true"
              className="ml-auto cursor-pointer"
              onClick={() => setMessage(null)}
            >
              &times;
            </span>
          </div>
        )}
        <fieldset className="border p-3 rounded">
          <legend
            className={`${styles.registrationFormLegend} border rounded p-1 text-center`}
          >
            Nuevo Admin
          </legend>
          <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <div className="form-group">
              <label htmlFor="inputForEmail">Email</label>
              <span className="mandatory">*</span>
              <input
                id="inputForEmail"
                name="email"
                type="email"
                className="form-control"
                aria-describedby="Enter email address"
                placeholder="Ingrese email"
                ref={register({
                  required: {
                    value: true,
                    message: "Porfavor Ingrese su Email",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Ingrese un email válido",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 caracteres",
                  },
                  maxLength: {
                    value: 255,
                    message: "Maximo 255 caracteres",
                  },
                })}
              />
              {
                
              }
              {errors.email && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="inputForName">Nombres</label>
              <span className="mandatory">*</span>
              <input
                id="inputForName"
                name="name"
                type="text"
                className="form-control"
                aria-describedby="Enter your name"
                placeholder="Ingresa tu Nombre"
                ref={register({
                  required: {
                    value: true,
                    message: "Porfavor Ingresa tu Nombre",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimo 6 caracteres",
                  },
                  maxLength: {
                    value: 255,
                    message: "Maximo 255 caracteres",
                  },
                })}
              />
              {errors.name && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.name.message}
                </span>
              )}
            </div>           

            <div className="form-group">
              <label htmlFor="inputForName">Identification Number</label>
              <span className="mandatory">*</span>
              <input
                id="inputForName"
                name="identification_number"
                type="text"
                className="form-control"
                aria-describedby="Ingresa tu número de identificación"
                placeholder="Ingresa tu número de identificación"
                ref={register({
                  required: {
                    value: true,
                    message: "Porfavor Ingresa tu número de identificación",
                  },                  
                })}
              />
              {errors.name && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.name.message}
                </span>
              )}
            </div>
          
            <div className="d-flex align-items-center justify-content-end">
              <button type="submit" className="btn btn-outline-primary">
                Registrar
              </button>
            
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Register;
