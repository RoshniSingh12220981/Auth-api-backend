 #INTERN BACKEND PROJECT
 
This is a complete **Node.js + Express + MongoDB** backend project built for internship evaluation purposes.
It includes user authentication, profile management, user preferences, and a dashboard summary endpoint. JWT is used for secure login, and the backend is modularly structured.

# Live Demo
🚀 **Deployed on Render**: [https://backendauthintern.onrender.com](https://backendauthintern.onrender.com)  

## 📁 Folder Structure

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

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- Bcrypt.js
- Joi (input validation)
- dotenv
- Render (for deployment)

#INSTRUCTIONS TO LOCALLY RUN THIS

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/internBackend.git
   cd internBackend
   
2. You need to create a `.env` file in root like: (FOR SECURITY AND UNDER GOOD DEVLOPMRNT PRACTICE I HAVE ADD MY .env DEATILS IN .gitignore
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

3. npm install -> npm run dev

##API Endpoints
User Authentication
POST /api/register
Register a new user
Input: { name, email, password }

POST /api/login
Login and get JWT token
Input: { email, password }

GET /api/profile (Protected)
Fetch logged-in user details

PATCH /api/profile (Protected)
Update name/email

##User Preferences API
POST /api/preferences (Protected)
Save or update preferences
Input: { theme, dashboardLayout }

GET /api/preferences (Protected)
Fetch user preferences

##Bonus: Dashboard Summary
GET /api/dashboard-summary
Returns dummy project/team/notification stats

