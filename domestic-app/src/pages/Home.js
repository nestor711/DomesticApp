// Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h2>Bienvenido a DomesticApp</h2>
          <p>Encuentra profesionales para servicios domésticos confiables y eficientes.</p>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="App Logo"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

