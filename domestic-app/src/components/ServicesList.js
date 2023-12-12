// ServicesList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServices } from '../services/api';

const ServicesList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Lógica para obtener la lista de servicios desde el backend
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h3>Lista de Servicios Disponibles</h3>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <Link to={`/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;