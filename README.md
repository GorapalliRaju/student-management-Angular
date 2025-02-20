# Student Management System

This is a **Student Management System** built using the **MEAN (MongoDB, Express.js, Angular, Node.js)** stack. The application allows users to register, log in, manage student records, and perform CRUD operations.

## 🚀 Features
- **User Authentication** (Register & Login)
- **CRUD Operations** (Add, Update, Delete, and Search Students)
- **MongoDB Atlas for database storage**
- **Angular for frontend**
- **RESTful API using Express.js and Node.js**
- **Protected Routes** (Users need authentication to access student management features)

---

## 🛠️ Tech Stack
- **Frontend**: Angular, TypeScript, Angular Forms
- **Backend**: Node.js, Express.js, MongoDB, JWT Authentication
- **Database**: MongoDB Atlas
- **Other**: bcrypt.js (for password hashing), JSON Web Token (JWT) for authentication

---

## 📌 Prerequisites
Before running the project, ensure you have installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) (or a local MongoDB instance)
- [Angular CLI](https://angular.io/cli) (if working with frontend)
- [Postman](https://www.postman.com/) (Optional, for testing API endpoints)

---

## 📂 Folder Structure
```
Student-Management-System/
│── backend/      # Express.js API
│── frontend/     # Angular app
│── README.md     # Project documentation
```

---

## 🔥 Backend Setup (Express + MongoDB)

### 1️⃣ Navigate to the backend folder:
```sh
cd backend
```

### 2️⃣ Install dependencies:
```sh
npm install
```

### 3️⃣ Configure `.env` (if required)
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the backend server:
```sh
npm start
```

Your backend should now be running on **`http://localhost:5000`**

---

## 🎨 Frontend Setup (Angular)

### 1️⃣ Navigate to the frontend folder:
```sh
cd frontend
```

### 2️⃣ Install dependencies:
```sh
npm install
```

### 3️⃣ Start the Angular development server:
```sh
ng serve --open
```

Your frontend should now be running on **`http://localhost:4200`**

---

## 🔐 API Endpoints
### **Auth Routes** (`/api/auth`)
| Method | Endpoint        | Description |
|--------|---------------|-------------|
| POST   | `/register`    | Register a new user |
| POST   | `/login`       | Log in and get JWT |
| GET    | `/profile`     | Get user profile (Protected) |

### **Student Routes** (`/api/students`)
| Method | Endpoint         | Description |
|--------|----------------|-------------|
| GET    | `/`            | Get all students |
| POST   | `/add`         | Add a new student |
| PUT    | `/:id`         | Update a student |
| DELETE | `/:id`         | Delete a student |

---

## 🛠 Common Issues & Fixes
### 1️⃣ **Backend not running?**
- Check if **MongoDB Atlas** is properly connected (`MONGO_URI` in `.env` file)
- Run `npm start` in the **backend** directory

### 2️⃣ **Frontend API calls failing?**
- Make sure backend is running at `http://localhost:5000`
- Update API URLs in `auth.service.ts` if necessary

---

## 💡 Contributing
Feel free to contribute to this project by submitting issues or pull requests.

---


### 🎯 Happy Coding! 🚀

