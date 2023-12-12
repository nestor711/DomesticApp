// RegisterUser.js
import React, { useState } from 'react';

const RegisterUser = () => {
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar datos de registro de usuario al backend
    // ...
  };

  return (
    <div>
      <h3>Registro de Usuario</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={userData.name} onChange={handleChange} />
        </label>
        <label>
          Dirección:
          <input type="text" name="address" value={userData.address} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </label>
        <label>
          Teléfono:
          <input type="tel" name="phone" value={userData.phone} onChange={handleChange} />
        </label>
        <label>
          Método de Pago:
          <input
            type="text"
            name="paymentMethod"
            value={userData.paymentMethod}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterUser;
