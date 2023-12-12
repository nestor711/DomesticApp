// RegisterWorker.js
import React, { useState } from 'react';
import { registerWorker } from '../services/api';

const RegisterWorker = () => {
  const [workerData, setWorkerData] = useState({
    name: '',
    address: '',
    photo: '',
    idImage: '',
    skills: [],
    hourlyRate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSkillsChange = (e) => {
    const { value } = e.target;
    setWorkerData((prevData) => ({ ...prevData, skills: [...prevData.skills, value] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerWorker(workerData);
      // Si la solicitud es exitosa, puedes redirigir al usuario a otra página o mostrar un mensaje de éxito.
      console.log('Trabajador registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar trabajador:', error);
    }
  };

  return (
    <div>
      <h3>Registro de Trabajador</h3>
      <form onSubmit={handleSubmit}>
        {/* Agrega campos de registro según sea necesario */}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterWorker;

