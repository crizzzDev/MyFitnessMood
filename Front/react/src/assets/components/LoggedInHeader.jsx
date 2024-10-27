import React, { useState, useEffect } from 'react';
import 'ionicons';

const LoggedInHeader = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = (e) => {
    // Close dropdown if clicked outside
    if (!e.target.closest('.dropdown')) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener on mount
    window.addEventListener('click', closeDropdown);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []); // Empty array to run this effect only once

  return (
    <header className="header">
      <div className="logo">
        <img src="RecursosGraficos/IconoM.png" alt="MyFitnessMood Logo" />
      </div>¹
      <nav className="nav">
        <ul className={`side-bar ${isSidebarVisible ? 'show' : ''}`}>
          <li>
            <ion-icon className="mobile-close-icon" name="close" onClick={toggleSidebar}></ion-icon>
          </li>
          <li><a className="nav-link" href="#">Planes</a></li>
          <li><a className="nav-link" href="#">Nutrición</a></li>
          <li><a className="nav-link" href="#">Registro</a></li>
        </ul>
        <ul className="bar">
          <li className="hideOnMobile"><a className="nav-link" href="#">Planes</a></li>
          <li className="hideOnMobile"><a className="nav-link" href="#">Nutrición</a></li>
          <li className="hideOnMobile"><a className="nav-link" href="#">Registro</a></li>
          <li className="mobile-menu-icon"><ion-icon name="menu" onClick={toggleSidebar}></ion-icon></li>
          <li className="dropdown">
            <ion-icon className="user-icon" name="person-circle-outline" onClick={toggleDropdown}></ion-icon>
            <div className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`}>
              <a className="a-dropdown" href="#">Cambiar datos</a>
              <a className="a-dropdown" href="#">Reportar un Problema</a>
              <a className="a-dropdown" href="#">Cerrar Sesión</a>
              <a className="a-dropdown-red" href="#">Borrar Cuenta</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default LoggedInHeader;
