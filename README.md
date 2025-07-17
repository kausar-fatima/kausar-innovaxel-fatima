# 🚀 URL Shortener REST API

A **Node.js + Express + MongoDB Atlas** URL Shortener for the **Innovaxel ASE - Python Specialist Take-Home Assignment**.

---

## ✅ Features

- Shorten long URLs
- Retrieve original URLs with click tracking
- Update or delete shortened URLs
- View usage statistics
- RESTful JSON API with clean structure

---

## ⚙️ Tech Stack

- **Node.js + Express** – Server and routing
- **MongoDB Atlas + Mongoose** – Database and schema modeling
- **nanoid** – Generate unique short codes
- **dotenv, cors** – Configuration and CORS handling

---

## 📂 Project Structure

```plaintext
url-shortener/
├── controllers/        # API logic
├── models/             # URL schema
├── routes/             # API routes
├── .env                # Environment variable template
├── server.js           # MongoDB connection and Entry point
└── README.md           # Documentation
