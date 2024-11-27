import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1', // Change to your server URL if different
});

export const signup = async (userData) => {
  return api.post('/user/signup', userData);
};

export const login = async (credentials) => {
  return api.post('/user/login', credentials);
};

export const getEmployees = async () => {
  return api.get('/emp/employees');
};

export const getEmployeeById = async (id) => {
  return api.get(`/emp/employees/${id}`);
};

export const addEmployee = async (employeeData) => {
  return api.post('/emp/employees', employeeData);
};

export const updateEmployee = async (id, employeeData) => {
  return api.put(`/emp/employees/${id}`, employeeData);
};

export const deleteEmployee = async (id) => {
  return api.delete(`/emp/employees/${id}`);
};

export const searchEmployees = async (searchParams) => {
  return api.get(`/emp/employees/search`, { params: searchParams });
};
