import api from './api'; // Your axios instance

export const gardenService = {
  getGarden: async (userId) => {
    // This hits http://localhost:5000/api/garden
    const response = await api.get(`/api/garden?userId=${userId}`);
    return response.data;
  },
  
  addPlant: async (plantData) => {
    // This hits http://localhost:5000/api/garden/add
    const response = await api.post('/api/garden/add', plantData);
    return response.data;
  }
};