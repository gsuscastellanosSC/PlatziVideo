/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => {
  const [form, setValues] = useState({
    mail: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className="register">
      <section className="login__container">
        <h2>Registrate</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            aria-label="Nombre"
            className="input"
            type="text"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            name="mail"
            aria-label="correo"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            aria-label="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button">Registrarme</button>
          <div className="login__container--remember-me" />
        </form>
        <p className="login__container--register">
          <Link to="/Login">
          Iniciar sesión
          </Link>
        </p>
      </section>
    </section>
  );
};

export default Register;
