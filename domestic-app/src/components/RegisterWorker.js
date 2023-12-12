// RegisterWorker.js
import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar datos de registro de trabajador al backend
    // ...
  };

  return (
    <div>
      <h3>Registro de Trabajador</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={workerData.name} onChange={handleChange} />
        </label>
        <label>
          Dirección:
          <input type="text" name="address" value={workerData.address} onChange={handleChange} />
        </label>
        <label>
          Foto:
          <input type="file" accept="image/*" name="photo" onChange={handleChange} />
        </label>
        <label>
          Imagen de ID:
          <input type="file" accept="image/*" name="idImage" onChange={handleChange} />
        </label>
        <label>
          Habilidades:
          <select multiple name="skills" onChange={handleSkillsChange}>
            <option value="plumbing">Fontanería</option>
            <option value="gardening">Jardinería</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
        </label>
        <label>
          Tarifa por Hora:
          <input type="text" name="hourlyRate" value={workerData.hourlyRate} onChange={handleChange} />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterWorker;
