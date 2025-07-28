# RBAC (Role-Based Access Control) Project

A professional Node.js application implementing Role-Based Access Control with JWT authentication.

## 🏗️ Project Structure

```
rbac1/
├── src/                          # Source code directory
│   ├── controllers/              # Business logic controllers
│   │   └── authController.js     # Authentication logic
│   ├── routes/                   # API route definitions
│   │   ├── authRoutes.js         # Authentication routes
│   │   └── userRoutes.js         # User management routes
│   ├── models/                   # Database schemas
│   │   └── User.js               # User model
│   ├── middleware/               # Custom middleware
│   │   ├── authMiddleware.js     # JWT token verification
│   │   └── roleMiddleware.js     # Role-based authorization
│   ├── config/                   # Configuration files
│   │   └── database.js           # Database connection
│   └── app.js                    # Main application file
├── server.js                     # Entry point
├── package.json                  # Dependencies and scripts
├── .env                          # Environment variables
└── README.md                     # This file
```

## 🚀 Features

- **JWT Authentication**: Secure token-based authentication
- **Role-Based Access Control**: Three user roles (admin, manager, user)
- **Secure Password Hashing**: Using bcryptjs
- **Input Validation**: Comprehensive request validation
- **Error Handling**: Centralized error handling
- **Security Headers**: Using helmet for security


## 👥 User Roles

1. **Admin**: Full access to all routes
2. **Manager**: Access to manager and user routes
3. **User**: Access to user routes only

## 🛠️ Installation

1. Clone the repository
```bash
git clone <repository-url>
cd rbac1
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb://localhost:27017/rbac_db
JWT_SECRET=your_super_secret_jwt_key_here
PORT=3000
NODE_ENV=development
```

4. Start the application
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)

#### Register User
- **POST** `/api/auth/register`
- **Body**: 
```json
{
  "username": "testuser",
  "password": "password123",
  "role": "user"
}
```

#### Login User
- **POST** `/api/auth/login`
- **Body**:
```json
{
  "username": "testuser",
  "password": "password123"
}
```
- **Response**:
```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "username": "testuser",
    "role": "user"
  }
}
```

### Protected Routes (`/api/users`)

All protected routes require `Authorization: Bearer <token>` header.

#### Admin Route
- **GET** `/api/users/admin`
- **Access**: Admin only

#### Manager Route
- **GET** `/api/users/manager`
- **Access**: Manager and Admin

#### User Dashboard
- **GET** `/api/users/dashboard`
- **Access**: All authenticated users

#### User Profile
- **GET** `/api/users/profile`
- **Access**: All authenticated users

## 🔧 Usage Examples

### 1. Register a new user
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "admin123",
    "role": "admin"
  }'
```

### 2. Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "admin123"
  }'
```

### 3. Access protected route
```bash
curl -X GET http://localhost:3000/api/users/admin \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs
- **JWT Tokens**: Secure token-based authentication with expiration
- **Input Validation**: Server-side validation for all inputs
- **Role Authorization**: Granular access control based on user roles
- **Security Headers**: Helmet.js for security headers


## 🧪 Testing

You can test the API using tools like:
- Postman
- Thunder Client (VS Code extension)
- curl commands
- Any HTTP client

## 📝 Development

### Adding New Routes
1. Create controller functions in `src/controllers/`
2. Define routes in `src/routes/`
3. Add middleware for authentication/authorization
4. Update this README

### Adding New Middleware
1. Create middleware function in `src/middleware/`
2. Export the function
3. Import and use in routes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

