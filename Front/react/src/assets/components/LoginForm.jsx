import React from 'react';
import { IonIcon } from 'react-ion-icon';

const LoginForm = ({ onClose, isActive }) => { // Recibimos isActive para aplicar la clase dinámicamente
  return (
    <div className={`wrapper ${isActive ? 'active-Popup' : ''}`}> 
      <span className="icon-close" onClick={onClose}>
        <IonIcon name="close" />
      </span>
      <div className="form-box login">
        <h2>Iniciar Sesión</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon"><IonIcon name="mail" /></span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon"><IonIcon name="lock-closed" /></span>
            <input type="password" required />
            <label>Contraseña</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Recordar</label>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit" className="btn-log">Ingresar</button>
          <div className="login-register">
            <p>¿Aún no tienes una cuenta?<a href="#" className="register-link"> Registrarse</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;