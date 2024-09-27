// src/components/InicioSection.jsx
import React from 'react';

const InicioSection = () => {
  return (
    <>
      <div className="content-inicio">
        <div className="content1-inicio">
          <h1>Una buena salud empieza por una buena alimentación.</h1>
          <p>¿Quieres prestar más atención a tu alimentación? Controla tus comidas, conoce tus hábitos y alcanza tus objetivos con MyFitnessMood.</p>
          <button type="button" className="btn btn-primary">Inicia hoy tu viaje</button>
        </div>
        <div className="content2-inicio">
          <img src="../RecursosGraficos/InicioAlimentos.png" alt="Alimentos Saludables" />
        </div>
      </div>

      <div className="content-middle">
        <div className="content-middle-title">
          <h2>Las herramientas para alcanzar tus objetivos</h2>
          <section className="p-section">
            <p>¿Quieres perder peso, tonificarte, reducir tu BMI o invertir en tu salud general?</p>
            <p>Te ofrecemos las funciones que necesitas para conseguirlo.</p>
          </section>
        </div>
        <div className="content-middle-blocks">
          <div className="content-middle-block-one">
            <img src="RecursosGraficos/icon01.png" alt="" />
            <h3>Aprende, Registra y Mejora</h3>
            <div className="content-middle-block-p">
              <p>Mantener un diario de comidas te ayudará a comprender tus hábitos y aumenta la probabilidad de que alcances tus objetivos.</p>
            </div>
          </div>
          <div className="content-middle-block-two">
            <img src="RecursosGraficos/icon02.png" alt="" />
            <h3>Nutrición simplificada</h3>
            <div className="content-middle-block-p">
              <p>Guarda comidas y recetas, y usa las herramientas rápidas para registrar los alimentos de forma rápida y sencilla.</p>
            </div>
          </div>
          <div className="content-middle-block-three">
            <img src="RecursosGraficos/icon03.png" alt="" />
            <h3>Mantén la motivación</h3>
            <div className="content-middle-block-p">
              <p>Explora múltiples artículos enfocados en la preparación física y obtén asesoramiento, consejos y tips en todo momento.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InicioSection;
