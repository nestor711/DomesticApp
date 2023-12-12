// WorkerDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const WorkerDetails = () => {
  const { id } = useParams();

  // Lógica para obtener detalles del trabajador con el ID proporcionado desde el backend
  // ...

  return (
    <div>
      <h3>Detalles del Trabajador</h3>
      <p>ID del Trabajador: {id}</p>
      {/* Muestra más detalles del trabajador según sea necesario */}
    </div>
  );
};

export default WorkerDetails;
