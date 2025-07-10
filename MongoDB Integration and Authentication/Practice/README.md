# Secure Authentication API with MongoDB and JWT

This folder is a Node.js-based REST API that implements full user authentication and CRUD functionality using **MongoDB Atlas**. It includes password hashing with **Bcrypt**, **user validation**, **JWT-based login**, and **route protection** middleware. The codebase is modular and built for scalability using **Express.js**.

---

## 📌Core Concepts

- **User Authentication**: The API allows users to register with hashed passwords and log in using secure, token-based authentication via JSON Web Tokens (JWT).

- **MongoDB Atlas Integration**: Data is stored in a cloud-based MongoDB instance. Mongoose is used to define schemas, handle database operations, and enforce data structure.

- **Modular Structure**:

  - `routes/` handles all the route definitions (auth and user routes).
  - `controllers/` contains logic for handling requests like registration, login, and user CRUD.
  - `models/` defines the Mongoose schema for users.
  - `middleware/` contains JWT authentication logic to protect private routes.

- **Data Validation**: Basic validation (e.g., checking required fields) is applied during registration and login, ensuring users provide valid credentials.

- **JWT Protection**: Private routes are protected using middleware that validates the presence and validity of JWTs passed via the `Authorization` header.

---

## 🔗 API Endpoints Overview

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Authenticate user and receive JWT
- `GET /api/users` – Retrieve all users (protected)
- `GET /api/users/:id` – Retrieve a single user by ID (protected)
- `PUT /api/users/:id` – Update a user by ID (protected)
- `DELETE /api/users/:id` – Delete a user by ID (protected)

Each request is handled through the controller layer and interacts with MongoDB using Mongoose models. Protected endpoints require a valid JWT.

---

## 🧩 Usage Notes

- Passwords are securely hashed using Bcrypt before being stored.
- JWTs are returned upon successful login and must be included in `Authorization: Bearer <token>` headers for protected routes.
- Errors such as invalid credentials, missing tokens, or unauthorized access return appropriate HTTP status codes.
- Environment variables (e.g., MongoDB URI and JWT secret) are managed using the `dotenv` package.

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Bcrypt** (for password hashing)
- **JWT (jsonwebtoken)** (for authentication)
- **dotenv** (for managing environment variables)

---
