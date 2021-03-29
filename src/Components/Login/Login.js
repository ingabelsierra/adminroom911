import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import styles from "./Login.module.css";

import { useForm } from "react-hook-form";
import config from "../../config";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState();
  const history = useHistory();

  const onSubmit = (data, e) => {
    setMessage({
      data: "Login en progreso...",
      type: "alert-warning",
    });

    axios
    .post(`${config.baseUrl}/api/login`, data)
    .then(
      (res) => {

        setTimeout(() => {
          //Storage.setItem('token', res.data.token);
          localStorage.setItem('token', res.data.message.token);         
          //console.warn(res.data.message.token);
          history.push("/dashboard");
        }, 3000);        
       
      },
      (err) => {
        setMessage({
          data: "usuario o contraseña invalido",
          type: "alert-danger",
        });
        
      }
    );

  };

  return (
    <div
      className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}
    >
      <div className={styles.loginFormContainer}>
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
            className={`${styles.loginFormLegend} border rounded p-1 text-center`}
          >
            Admin Room 911
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
                placeholder="Ingresa Email"
                value="ingabelsierra@gmail.com"
                ref={register({
                  required: {
                    value: true,
                    message: "Porfavor Ingresa Email",
                  },
                })}
              />
              {}
              {errors.email && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="inputForPassword">Password</label>
              <span className="mandatory">*</span>
              <input
                type="password"
                name="password"
                className="form-control"
                id="inputForPassword"
                placeholder="Ingresa password"
                value="1234"
                ref={register({
                  required: {
                    value: true,
                    message: "Porfavor Ingresa password",
                  },
                })}
              />
              {errors.password && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="d-flex align-items-center">
              <button type="submit" className="btn btn-outline-primary">
                Login
              </button>
           
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
