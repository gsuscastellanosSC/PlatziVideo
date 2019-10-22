/* eslint-disable react/button-has-type */
import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className="register">
    <section className="login__container">
      <h2>Registrate</h2>
      <form className="login__container--form">
        <input aria-label="Nombre" className="input" type="text" placeholder="Nombre" />
        <input aria-label="correo" className="input" type="text" placeholder="Correo" />
        <input aria-label="password" className="input" type="password" placeholder="Contraseña" />
        <button className="button">Registrarme</button>
        <div className="login__container--remember-me" />
      </form>
      <p className="login__container--register"><a href="IniciaSesion.html">Iniciar sesión</a></p>
    </section>
  </section>
);

export default Register;
