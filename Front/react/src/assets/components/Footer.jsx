import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-content">
      <div>
        <ul>
          <li className="li-elements"><a href="#none">Términos y condiciones de uso de MyFitnessMood</a></li>
          <li><a href="#none">Soporte</a></li>
          <li><a href="#none">Gestión de datos</a></li>
          <li><a href="#none">Políticas de privacidad</a></li>
        </ul>
        <div className="backToTop">
          <a href="#sitio">
            <img src="RecursosGraficos/IconoM.png" alt="Volver arriba" />
          </a>
        </div>
        <div className="copyright">
          <p>© 2024 MyFitnessMood</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
