import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para la navegación entre rutas
import { IonIcon } from 'react-ion-icon';  // Íconos de IonIcon

const LoginForm = ({ onClose, isActive }) => {   // Estados para manejar el formulario (registro o login), email, contraseña y nombre
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Para el formulario de registro
  const navigate = useNavigate(); // Hook para redireccionar a otras páginas

  const toggleForm = () => {  // Alterna entre el formulario de registro e inicio de sesión
    setIsRegister(!isRegister);
  };

  const closeForm = () => {  // Restablecer al formulario de login cuando se cierre
    onClose();
    setIsRegister(false); 
  };

  const handleLogin = async (e) => {   // Maneja el inicio de sesión
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    const response = await fetch('http://localhost:5000/loggedIn', {     // Enviar solicitud al servidor para iniciar sesión
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),  // Enviar email y contraseña
    });

    if (response.ok) {  // Redirigir a la página "LoggedIn" si la autenticación es exitosa
      navigate('/loggedIn'); // ASIGNACION DE LA RUTA DESEADA AL ACCEDER NO OLVIDAR
    } else {
      alert('Credenciales incorrectas'); // Mostrar alerta si las credenciales son incorrectas
    }
  };

  const handleRegister = async (e) => {  // Maneja el registro de nuevos usuarios
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const response = await fetch('http://localhost:5000/register', {  // Enviar solicitud al servidor para registrar al nuevo usuario
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),  // Enviar nombre, email y contraseña
    });

    if (response.ok) {
      alert('Registro exitoso');   // Alerta de registro exitoso y cierre del formulario
      closeForm(); 
    } else {
      alert('Error al registrarse');  // Alerta de error en el registro
    }
  };

  return (
    <div className={`wrapper ${isActive ? 'active-Popup' : ''} ${isRegister ? 'active' : ''}`}>
      <span className="icon-close" onClick={closeForm}>
        <IonIcon name="close" />
      </span>

      <div className={`form-box ${isRegister ? 'register' : 'login'}`}>
        {isRegister ? (
          <>
            <h2>Registrarse</h2>
            <form onSubmit={handleRegister}>
              <div className="input-box">
                <span className="icon"><IonIcon name="person" /></span>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                <label>Nombre</label>
              </div>
              <div className="input-box">
                <span className="icon"><IonIcon name="mail" /></span>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon"><IonIcon name="lock-closed" /></span>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Contraseña</label>
              </div>
              <button type="submit" className="btn-log">Registrarse</button>
              <div className="login-register">
                <p>¿Ya tienes una cuenta? <a onClick={toggleForm} className="login-link">Iniciar Sesión</a></p>
              </div>
            </form>
          </>
        ) : (
          <>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
              <div className="input-box">
                <span className="icon"><IonIcon name="mail" /></span>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon"><IonIcon name="lock-closed" /></span>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Contraseña</label>
              </div>
              <div className="remember-forgot">
                <label className="checkbox-label">
                  <input type="checkbox" className="custom-checkbox" /> Recordar
                </label>
                <a href="#">¿Olvidaste tu contraseña?</a>
              </div>
              <button type="submit" className="btn-log">Ingresar</button>
              <div className="login-register">
                <p>¿Aún no tienes una cuenta? <a onClick={toggleForm} className="register-link">Registrarse</a></p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;