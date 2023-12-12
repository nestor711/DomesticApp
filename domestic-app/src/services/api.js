// api.js
import axios from 'axios';

const baseURL = 'http://localhost:3001'; // Reemplaza con la URL real de tu backend

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    // Puedes agregar más encabezados según sea necesario
  },
});

export const getServices = async () => {
  try {
    const response = await api.get('/services');
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const registerWorker = async (workerData) => {
  try {
    const response = await api.post('/workers', workerData);
    return response.data;
  } catch (error) {
    console.error('Error registering worker:', error);
    throw error;
  }
};

// Puedes agregar más funciones según sea necesario para otras operaciones con el backend

