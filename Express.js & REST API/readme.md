# Node.js & Express.js Project Overview

A hands-on walkthrough of building an Express.js server with multiple core features, middleware, and full CRUD operations using in-memory data storage.

## Features Implemented

### ✅ Install Express & Create Server

Set up a basic Express.js project and initialized the server.

### 📁 Folder Structure Improvement

Organized project files into logical folders:

- `routes/` for route handlers
- Main server file kept clean and modular

### 🔀 Create Multiple Routes

Implemented routes to handle various HTTP methods:

- `GET`
- `POST`

Responses return appropriate JSON payloads.

### 🔍 Route Parameters & Query Parameters

Demonstrated the use of:

- **Route Parameters** (e.g., `/users/:id`)
- **Query Parameters** (e.g., `/search?name=value`)

### 📝 Logger Middleware Creation

Created a simple middleware to log each request for better visibility during development.

### 🕒 Custom Middleware for Timestamp/Logging

Enhanced the logging middleware to include:

- Timestamps for each request
- Consistent log format

### ❗ Error Handling Middleware

Implemented centralized error handling using custom middleware to catch and respond with clean error messages.

### 🧠 Complete CRUD API with In-Memory Array Storage

Built a fully functional API to manage user data using an array as the data store.

### 📚 Implemented Routes:

- `GET /users` — Fetch all users
- `GET /users/:id` — Fetch a user by ID
- `POST /users` — Create a new user
- `PUT /users/:id` — Update a user by ID
- `DELETE /users/:id` — Delete a user by ID

---

## 📦 Requirements

- Node.js
- npm
- Postman or browser for testing endpoints
- 
