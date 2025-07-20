# Node.js Products API with JWT Authentication

A simple Node.js and Express-based REST API that manages users and products with protected routes using JWT authentication.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Kavita113/celebal.git
cd Assignment_7_JWTAuth
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=8000
DATABASE_URL=mongodb://localhost:27017/your-db-name
ACCESS_TOKEN_SECRET=your_secret_key
```

### 4. Start the server

```bash
npm start
```

---

##  API Flow Overview

### ➤ User Registration
**Endpoint:** `POST /users`  
Registers a new user with `name`, `email`, and `phoneNo`.

---

### ➤ User Login
**Endpoint:** `POST /auth/login`  
Logs in the user and returns a JWT token if credentials match.

---

### ➤ Protected Product Routes

#### `GET /products`
Returns a list of all products. Public route.

#### `GET /products/:id`
Returns a product by ID. Public route.

#### `POST /products`
Creates a new product. Requires JWT token generated from  `/Login`.

#### `PATCH /products/:id`
Updates an existing product. Requires JWT token generated from  `/Login`.

#### `DELETE /products/:id`
Deletes a product. Requires JWT token generated from  `/Login`.

You must include the JWT token in the `Authorization` header:

```http
Authorization: Bearer <token>
```

---

##  Auth Middleware

- Checks for JWT in request headers.
- Blocks access if token is missing or invalid.
- Adds user info to `req.user`.

---

##  Technologies Used

- Node.js
- Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)

---

## Folder Structure

```
project/
│
├── models/
│   ├── model.user.js
│   └── model.product.js
│
├── routes/
│   ├── routes.users.js
│   ├── routes.products.js
│   └── auth.routes.js
│
├── middlewares/
│   └── auth.mw.js
│
├── .env
├── server.js
└── README.md
```

---

## Contact

If you have questions, feel free to reach out via Issues or Pull Requests.
