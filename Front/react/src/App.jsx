import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import LoginForm from './assets/components/LoginForm';
import InicioSection from './assets/components/InicioSection';
import Carousel from './assets/components/Carousel';
import ContactPage from './assets/components/ContactPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  // Estado para el popup de inicio de sesión
  const [isLoginPopupVisible, setLoginPopupVisible] = useState(false);
  
  // Estado para el menú mobile
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Funciones para manejar el popup de inicio de sesión
  const showLoginPopup = () => {
    setLoginPopupVisible(true);
  };

  const closeLoginPopup = () => {
    setLoginPopupVisible(false);
  };

  // Funciones para manejar el menú responsive
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className="div-sitio" id="sitio">
        <Header onLoginClick={showLoginPopup} />
        <div className='container' id='contenedor-principal'>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <InicioSection />
                  <Carousel />
                </>
              } 
            />
            <Route 
              path="/contacto" 
              element={<ContactPage />} 
            />
          </Routes>
          <LoginForm isActive={isLoginPopupVisible} onClose={closeLoginPopup} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;