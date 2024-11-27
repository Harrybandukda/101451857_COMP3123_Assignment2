# COMP 3123 - Assignment Two - Full Stack Development I

**Student Name**: Mo Harry Bandukda  
**Student ID**: 101451857  

## 🚀 Project Overview

This project is a **Full-Stack Web Application** built with **React.js** (frontend) and **Node.js** (backend), utilizing **MongoDB** for the database and **Axios** for API requests. The user interface is styled with **Material-UI**, and the entire application is containerized using **Docker** for ease of deployment.  

The application provides CRUD operations for both users and employees, with an additional **search functionality** to filter employees by department and position.

---

## 📋 Prerequisites

No installation is required! The project is fully containerized using **Docker Compose**, so all dependencies are handled automatically.

---

## 🛠️ Quick Start Guide

### Step 1: Clone the repository

Clone this repository to your local machine:

```bash
git clone https://github.com/Harrybandukda/101451857_COMP3123_Assignment2.git
cd 101451857_COMP3123_Assignment2
```

### Step 2: Run the application using Docker

Run the following command to build and start the containers:

```bash
docker-compose up --build
```

> **Note**: This command will start both the backend server and frontend React application, along with the MongoDB database, in their respective Docker containers.

### Step 3: Access the application

Once the containers are running, you can access the application in your web browser at:

```bash
http://localhost:3000
```

> The backend server runs on port `5000`, while the frontend is served on port `3000`.

---

## 🔗 API Endpoints

### User Routes (`/api/users`)

| Method | Endpoint          | Description           |
|--------|-------------------|-----------------------|
| GET    | `/api/v1/user/login`      | Fetch all users       |
| POST   | `/api/v1/user/signup`      | Create a new user     |

### Employee Routes (`/api/employees`)

| Method | Endpoint                 | Description                           |
|--------|--------------------------|---------------------------------------|
| GET    | `/api/v1/emp/employees`         | Fetch all employees                   |
| POST   | `/api/v1/emp/employees`         | Create a new employee                 |
| GET    | `/api/v1/emp/employees/:id`     | Fetch an employee by ID               |
| PUT    | `/api/v1/emp/employees/:id`     | Update an employee by ID              |
| DELETE | `/api/v1/emp/employees/:id`     | Delete an employee by ID              |
| GET    | `/api/v1/emp/employees/search`  | Search employees by department/position |

---

## 🔍 Search Functionality

The **search feature** allows you to filter employees based on their **department** and **position**. Simply select the desired options in the dropdown menus on the **Employee List page** and click "Search."

---

## 🌟 Features

- **Frontend**:
  - Built with **React.js**.
  - Styled using **Material-UI** for a modern and responsive UI.
  - Screens include **Login**, **Signup**, and **Employee List** with search functionality.
  
- **Backend**:
  - Developed with **Node.js** and **Express.js**.
  - Includes a robust RESTful API for user and employee management.
  
- **Database**:
  - Powered by **MongoDB**, with schema validation for user and employee data.

- **Deployment**:
  - Fully containerized using **Docker Compose** for easy setup and portability.

---

## 📸 Screenshots

### 1. Login Page
![Login Page Screenshot](/screenshot/login.png)

### 2. Signup Page
![Signup Page Screenshot](/screenshot/Signup.png)

### 3. Employee List
![Employee List Screenshot](/screenshot/employeelist.png)

---

📝 **Created by Mo Harry Bandukda**  
