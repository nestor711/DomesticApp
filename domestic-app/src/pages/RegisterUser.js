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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para registrar usuario
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          {/* Formulario de registro */}
        </div>
        <div className="col-md-6 d-none d-md-block">
          {/* Imagen u otro contenido adicional visible solo en pantallas medianas y grandes */}
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
