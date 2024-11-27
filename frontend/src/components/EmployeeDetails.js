import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeById } from '../services/api';
import { Container, Typography, Paper } from '@mui/material';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      const { data } = await getEmployeeById(id);
      setEmployee(data);
    };

    fetchEmployee();
  }, [id]);

  if (!employee) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Paper elevation={3} padding={2}>
        <Typography variant="h5">{employee.first_name} {employee.last_name}</Typography>
        <Typography variant="body1">Position: {employee.position}</Typography>
        <Typography variant="body1">Department: {employee.department}</Typography>
        <Typography variant="body1">Salary: {employee.salary}</Typography>
        <Typography variant="body1">Date of Joining: {new Date(employee.date_of_joining).toLocaleDateString()}</Typography>
      </Paper>
    </Container>
  );
};

export default EmployeeDetails;
