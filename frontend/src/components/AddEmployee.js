import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { addEmployee } from '../services/api';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    position: '',
    department: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await addEmployee(formData);
      alert('Employee added successfully');
      navigate('/employees');
    } catch (err) {
      alert('Error adding employee');
    }
  };

  return (
    <Box sx={{ mt: 4, p: 2, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" textAlign="center" mb={3}>Add Employee</Typography>
      <TextField 
        fullWidth 
        label="First Name" 
        name="first_name" 
        value={formData.first_name} 
        onChange={handleChange} 
        sx={{ mb: 2 }} 
      />
      <TextField 
        fullWidth 
        label="Last Name" 
        name="last_name" 
        value={formData.last_name} 
        onChange={handleChange} 
        sx={{ mb: 2 }} 
      />
      <TextField 
        fullWidth 
        label="Email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        sx={{ mb: 2 }} 
      />
      <TextField 
        fullWidth 
        label="Position" 
        name="position" 
        value={formData.position} 
        onChange={handleChange} 
        sx={{ mb: 2 }} 
      />
      <TextField 
        fullWidth 
        label="Department" 
        name="department" 
        value={formData.department} 
        onChange={handleChange} 
        sx={{ mb: 2 }} 
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
        Add Employee
      </Button>
    </Box>
  );
};

export default AddEmployee;
