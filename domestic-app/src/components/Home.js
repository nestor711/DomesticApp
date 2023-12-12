// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Bienvenido a DomesticApp</h2>
      <p>
        Encuentra profesionales para servicios domésticos confiables y eficientes.
      </p>
      <Link to="/services">Ver Servicios</Link>
    </div>
  );
};

export default Home;