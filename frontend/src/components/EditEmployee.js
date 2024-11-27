import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Paper, Container } from '@mui/material';
import { getEmployeeById, updateEmployee } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
        const response = await getEmployeeById(id);
        setFormData(response.data);
      } catch (err) {
        console.error('Error fetching employee details:', err);
        alert('Error fetching employee details');
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(id, formData);
      alert('Employee updated successfully');
      navigate('/employees');
    } catch (err) {
      console.error('Error updating employee:', err);
      alert('Error updating employee');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 4, p: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Edit Employee
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
              startIcon={<SaveIcon />}
            >
              Update Employee
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default EditEmployee;

