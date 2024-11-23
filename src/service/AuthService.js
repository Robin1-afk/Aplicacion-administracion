import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        const { token } = response.data;
        localStorage.setItem("token", token);
        return token;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error al iniciar sesión");
    }
};

export const isAuthenticated = () => !!localStorage.getItem("token");

export const logout = () => {
    localStorage.removeItem("token");
};
