import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { getEmployee, updateEmployee } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    position: '',
    department: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await getEmployee(id);
        setFormData(response.data);
      } catch (err) {
        alert('Error fetching employee details');
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await updateEmployee(id, formData);
      alert('Employee updated successfully');
      navigate('/employees');
    } catch (err) {
      alert('Error updating employee');
    }
  };

  return (
    <Box sx={{ mt: 4, p: 2, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" textAlign="center" mb={3}>Edit Employee</Typography>
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
        Update Employee
      </Button>
    </Box>
  );
};

export default EditEmployee;
