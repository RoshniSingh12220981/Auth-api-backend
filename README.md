# Intern Backend Project - Complete Node.js Authentication & User Management API

# Project Overview

This is a complete **Node.js + Express + MongoDB** backend project built for internship evaluation purposes. It implements user authentication, profile management, user preferences, and a dashboard summary endpoint. JWT is used for secure login, and the backend follows a modular architecture.

## Live Demo

🚀 **Deployed on Render**: [https://backendauthintern.onrender.com](https://backendauthintern.onrender.com/)

## Project Structure

```
auth-settings-api/
├── controllers/
│   ├── authController.js
│   ├── preferenceController.js
│   └── profileController.js
├── models/
│   ├── User.js
│   └── Preference.js
├── routes/
│   ├── authRoutes.js
│   ├── preferenceRoutes.js
│   └── profileRoutes.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── db.js
├── .env
├── app.js
└── server.js
```

## Technology Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- Bcrypt.js
- Joi (input validation)
- dotenv
- Render (for deployment)

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/internBackend.git
cd internBackend
```

### 2. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

*Note: The .env file is included in .gitignore for security best practices*

### 3. Installation and Running

```bash
npm install
npm run dev
```

## API Documentation

### Authentication Endpoints

- POST /api/register
    
    **Description:** Register a new user
    **Input:** { name, email, password }
    
- POST /api/login
    
    **Description:** Login and get JWT token
    **Input:** { email, password }
    
- GET /api/profile (Protected)
    
    **Description:** Fetch logged-in user details
    
- PATCH /api/profile (Protected)
    
    **Description:** Update name/email
    

### User Preferences Endpoints

- POST /api/preferences (Protected)
    
    **Description:** Save or update preferences
    **Input:** { theme, dashboardLayout }
    
- GET /api/preferences (Protected)
    
    **Description:** Fetch user preferences
    

### Dashboard Endpoint

- GET /api/dashboard-summary
    
    **Description:** Returns dummy project/team/notification stats
### Sample screenshots

  ![Screenshot (772)](https://github.com/user-attachments/assets/bb1da653-5572-4d63-b74f-9badf082dd9a)
  ![Screenshot (771)](https://github.com/user-attachments/assets/730d7e16-f991-4a0b-9570-12299cbad632)
  ![Screenshot (767)](https://github.com/user-attachments/assets/d887a054-557f-4cd3-83cc-60cd1740bb17)
  ![Screenshot (764)](https://github.com/user-attachments/assets/59470d11-fc1b-455d-a4fb-1976464940bc)
  ![Screenshot (766)](https://github.com/user-attachments/assets/7a32c95d-cb78-4db9-a47d-a9779cd2add9)





