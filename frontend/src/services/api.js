import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/', // URL do backend Django
});

export const getFuncionarios = () => api.get('funcionarios/');
export const getClientes = () => api.get('clientes/');
export const getGastos = () => api.get('gastos/');
export const getLucros = () => api.get('lucros/');

export default api;
