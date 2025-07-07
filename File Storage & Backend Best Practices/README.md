# CRUD API with File Storage and Validation

This project is a simple Node.js-based REST API that implements full CRUD functionality with file-based storage. It uses `.json` files to persist user data and includes input validation using Joi. The codebase is structured into clear folders for routing, controller logic, and validation.

---

## 📌 Core Concepts

- **CRUD Functionality**: The API allows you to Create, Read, Update, and Delete users through RESTful endpoints.

- **File-Based Storage**: Instead of a database, user data is stored in a `users.json` file inside a `data` folder. All read/write operations directly manipulate this file, simulating persistent storage.

- **Modular Structure**:

  - `routes/` handles all the route definitions.
  - `controllers/` contains logic for handling API requests.
  - `validators/` defines Joi schemas to validate user input.

- **Data Validation**: Joi is used to validate incoming data for `POST` and `PUT` requests. It ensures fields like `name`, `email`, and `age` (or others) meet the required criteria before processing.

- **Nodemon Integration**: During development, Nodemon automatically restarts the server on code changes to improve developer productivity.

---

## 🔗 API Endpoints Overview

- `POST /users` – Create a new user
- `GET /users` – Retrieve all users
- `GET /users/:id` – Retrieve a single user by ID
- `PUT /users/:id` – Update a user by ID
- `DELETE /users/:id` – Delete a user by ID

Each request is validated and processed through the controller layer, and all updates are persisted to the `users.json` file.

---

## 🧩 Usage Notes

- Every user is assigned a unique identifier (UUID).
- Validation errors return a `400 Bad Request` with specific messages.
- File operations are synchronous or async depending on the implementation — designed to work without a database.
- Error handling is implemented for edge cases like missing users or invalid data.

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **Joi** (for schema validation)
- **Nodemon** (for development)
- **Native File System (fs)** module for storage

---
