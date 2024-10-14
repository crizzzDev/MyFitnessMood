import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ onLoginClick }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const showSidebar = () => {
    setMenuOpen(true);
  };

  const hideSidebar = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="RecursosGraficos/IconoM.png" alt="My MyFitnessMood Logo" />
      </div>
      <nav className="nav">
        <ul className={`side-bar ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <ion-icon 
              className="mobile-close-icon" 
              name="close" 
              onClick={hideSidebar}
              style={{ color: '#fff', fontSize: '2em' }}
            ></ion-icon>
          </li>
          <li className="text-nav">
            <Link to="/">Inicio</Link>
          </li>
          <li className="text-nav">
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <button className="btnLogin-popup" onClick={onLoginClick}>
              Iniciar Sesión
            </button>
          </li>
        </ul>
        <ul className="bar">
          <li className="hideOnMobile text-nav">
            <Link to="/">Inicio</Link>
          </li>
          <li className="hideOnMobile text-nav">
            <Link to="/contacto">Contacto</Link>
          </li>
          <li className="hideOnMobile">
            <button className="btnLogin-popup" onClick={onLoginClick}>
              Iniciar Sesión
            </button>
          </li>
          <li className="mobile-menu-icon" onClick={showSidebar}>
            <ion-icon name="menu"></ion-icon>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
