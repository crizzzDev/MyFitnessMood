import React from 'react';

const Carousel = () => {
  return (
    <div className="final-content">
      <div className="carousel-title">
        <h2>Alcanza el éxito</h2>
        <section className="p-section">
          <p>Cada día, más miembros alcanzan sus objetivos con MyFitnessMood.</p>
          <p>Inspírate para el viaje que tienes por delante.</p>
        </section>
      </div>
      <div id="carouselAutoplaying" className="carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="RecursosGraficos/stock01.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="RecursosGraficos/stock02.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="RecursosGraficos/stock03.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
