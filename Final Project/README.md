# Complete RESTful API with Node.js, Express, MongoDB & JWT

This folder contains a fully-featured RESTful API built using **Node.js** and **Express.js**, with persistent data storage in **MongoDB**. The project supports complete **CRUD operations**, integrates robust **JWT-based authentication**, and ensures **data validation** using **Joi**. The application follows a modular structure and uses modern backend development practices, including environment configuration, route protection, middleware, and database abstraction through **Mongoose**.

---

## 📌 Core Features

- **CRUD Functionality**: The API includes full Create, Read, Update, and Delete operations on user data using clean and efficient RESTful routes.

- **Express.js & Middleware**: Custom middleware is used for logging, error handling, route protection, and parsing requests. The server is structured for scalability and readability.

- **File System (fs Module)**: Utilized for handling local file operations, such as writing logs or managing static content.

- **Environment Configuration**: Sensitive data such as database URIs and JWT secrets are managed through `.env` files using the `dotenv` package.

- **.gitignore Setup**: All environment-sensitive and unnecessary files like `node_modules` and `.env` are excluded from version control to ensure clean and secure repositories.

- **Route Handling**:

  - Centralized route configuration using Express Router.
  - Modular route files for different resources and purposes.
  - RESTful endpoints with clear HTTP method usage.

- **Joi Data Validation**: Every incoming request is validated using **Joi** to ensure type safety and required data structure compliance.

- **MongoDB & Mongoose Integration**:

  - MongoDB is used as the primary database (is hosted via MongoDB Atlas).
  - Mongoose manages schema definition, model creation, and complex querying.

- **JWT Authentication**:

  - Users log in and receive a **signed token** that must be provided in future requests.
  - Middleware validates JWTs and restricts access to protected routes accordingly.

- **Protected Routes**: Endpoints that modify or access sensitive data are accessible only via valid JWT tokens, ensuring secure data operations.

- **Nodemon for Development**: Server auto-restarts on file changes using **Nodemon**, making development faster and more efficient.

---

## 🔗 API Endpoints Overview

- `GET /api/users` – Retrieve all users (protected)
- `GET /api/users/:id` – Retrieve a single user by ID (protected)
- `POST /api/users` – Create a new user (protected)
- `PUT /api/users/:id` – Update a user’s information (protected)
- `DELETE /api/users/:id` – Delete a user account (protected)

Each endpoint is routed through a controller layer, includes input validation, and interfaces with MongoDB using Mongoose. Routes requiring authentication must be accessed with a valid JWT token passed via the `Authorization: Bearer <token>` header.

---

## 🧩 Usage Notes

- The application uses **JWT** for authenticating users after login. These tokens must be included in the `Authorization` header for all protected routes.
- Passwords are securely handled and stored in the database only after **hashing** (is integrated with libraries like Bcrypt).
- All incoming data (especially for user creation and updates) is validated using **Joi schemas** to ensure correctness.
- Errors such as invalid input, expired or missing tokens, and resource-not-found scenarios return well-structured error responses with meaningful HTTP status codes.
- Configurable values like the MongoDB URI, server port, and JWT secret key are defined in a `.env` file.

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime environment for building scalable backend services.
- **Express.js** – Web framework used to build the REST API and handle routing.
- **MongoDB** – NoSQL database for storing application data.
- **Mongoose** – ODM for interacting with MongoDB using defined schemas and models.
- **dotenv** – Loads environment variables from `.env` files into `process.env`.
- **fs (File System Module)** – Used for local file interactions (e.g., logs, static resources).
- **Joi** – JavaScript schema description language and validator for validating request payloads.
- **jsonwebtoken (JWT)** – Handles secure token creation and validation.
- **nodemon** – Dev dependency to automatically restart the server on file changes.
- **Custom Middleware** – Implements functionality such as logging, JWT token verification, error handling, and more.
- **Bcrypt** - Hashes the user passwords for increased security

---
