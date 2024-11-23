import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/';

const ProductService = {
  getProducts: async () => {
    try {
      const token = localStorage.getItem('token');
      console.log("Token en localStorage:", token);

      if (!token) {
        throw new Error('Usuario no autenticado. Token no encontrado.');
      }

      const headers = {
        Authorization: `Bearer ${token}`
      };
      console.log("Encabezados:", headers);

      const response = await axios.get(url + 'allNegocios', { headers });

      console.log("Response data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error.response?.data || error.message);
      return [];
    }
  }
};

export default ProductService;
