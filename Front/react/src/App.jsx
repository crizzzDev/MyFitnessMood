import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';  // Componente Header
import Footer from './assets/components/Footer';  // Componente Footer
import LoginForm from './assets/components/LoginForm';  // Componente para el formulario de inicio de sesión
import InicioSection from './assets/components/InicioSection';  // Sección de inicio
import Carousel from './assets/components/Carousel';  // Componente carrusel
import ContactPage from './assets/components/ContactPage';  // Página de contacto
import './App.css';  // Estilos de la aplicación
import 'bootstrap/dist/css/bootstrap.min.css';  // Estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Funcionalidades de Bootstrap

function App() {
  // Estado que controla la visibilidad del popup de inicio de sesión
  const [isLoginPopupVisible, setLoginPopupVisible] = useState(false);

  // Función para mostrar el popup de inicio de sesión
  const showLoginPopup = () => {
    setLoginPopupVisible(true);
  };

  // Función para cerrar el popup de inicio de sesión
  const closeLoginPopup = () => {
    setLoginPopupVisible(false);
  };

  return (
    <Router>
      {/* Renderiza el Header y pasa la función para mostrar el popup como prop */}
      <Header onLoginClick={showLoginPopup} />
      <div className="div-sitio" id="sitio">
        <div className='container' id='contenedor-principal'>
          <Routes>
            {/* Ruta para la página de inicio con las secciones InicioSection y Carousel */}
            <Route path="/" element={<><InicioSection /><Carousel /></>} />
            
            {/* Ruta para la página de contacto */}
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>

          {/* Renderiza el formulario de inicio de sesión, controlando su visibilidad */}
          <LoginForm isActive={isLoginPopupVisible} onClose={closeLoginPopup} />
        </div>
        {/* Renderiza el Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;