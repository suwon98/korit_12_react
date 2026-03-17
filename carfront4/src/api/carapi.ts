import {CarResponse, Car, CarEntry} from '../types';
import axios from 'axios';

// GET
export const getCars = async () : Promise<CarResponse[]> => {
  const token = localStorage.getItem('jwt');
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/vehicles`, {
    headers: {
      'Authorization' : token,
    }
  });

  return response.data._embedded.cars;
}

// DELETE
export const deleteCar = async (link: string) => {
  const token = localStorage.getItem('jwt');
  const response = await axios.delete(link, {
    headers: {
      'Authorization' : token,
    }
  });
  return response.data;
}

// POST
export const addCar = async (car: Car) => {
  const token = localStorage.getItem('jwt');
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/vehicles` , car, {
    headers: {
      'Authorization' : token,
      'Content-Type' : 'application/json',
    },
  });

  return response.data;
}

// PUT
export const updateCar = async (carEntry: CarEntry): Promise<CarResponse> => {
  const token = localStorage.getItem('jwt');
  const response = await axios.put(carEntry.url, carEntry.car, {
    headers: {
      'Authorization' : token,
      'Content-Type' : 'application/json',
    },
  });

  return response.data;
}