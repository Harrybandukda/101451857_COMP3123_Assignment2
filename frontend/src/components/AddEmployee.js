import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Container } from '@mui/material';
import { addEmployee } from '../services/api';
import { useNavigate } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployee(formData);
      alert('Employee added successfully');
      navigate('/employees');
    } catch (err) {
      alert('Error adding employee');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 4, p: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Add New Employee
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField 
            fullWidth 
            label="First Name" 
            name="first_name" 
            value={formData.first_name} 
            onChange={handleChange} 
            margin="normal"
            required
          />
          <TextField 
            fullWidth 
            label="Last Name" 
            name="last_name" 
            value={formData.last_name} 
            onChange={handleChange} 
            margin="normal"
            required
          />
          <TextField 
            fullWidth 
            label="Email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            margin="normal"
            required
            type="email"
          />
          <TextField 
            fullWidth 
            label="Position" 
            name="position" 
            value={formData.position} 
            onChange={handleChange} 
            margin="normal"
            required
          />
          <TextField 
            fullWidth 
            label="Department" 
            name="department" 
            value={formData.department} 
            onChange={handleChange} 
            margin="normal"
            required
          />
          <TextField 
            fullWidth 
            label="Salary" 
            name="salary" 
            value={formData.salary} 
            onChange={handleChange} 
            margin="normal"
            required
            type="number"
          />
          <TextField 
            fullWidth 
            label="Date of Joining" 
            name="date_of_joining" 
            value={formData.date_of_joining} 
            onChange={handleChange} 
            margin="normal"
            required
            type="date"
          />

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/employees')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<PersonAddIcon />}
            >
              Add Employee
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddEmployee;

