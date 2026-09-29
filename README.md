# 🍜 Cloud Kitchen – Food Ordering Platform

A full-stack Cloud Kitchen food ordering web application built using React, Node.js, Express.js, and MongoDB. The platform allows customers to browse food items, place orders, and track their deliveries.

## 🌐 Live Demo

* **Live Website:** https://cloud-kitchen-swatantra.vercel.app
* **Backend API:** https://cloud-kitchen-backend-5ut.onrender.com
* **GitHub Repository:** https://github.com/Swatantra35/cloud-kitchen

## ✨ Features

* User registration and login
* Browse food menu and food categories
* Add items to cart and place orders
* Order history and order tracking
* Customer profile management
* Admin and delivery management
* REST API integration
* Responsive user interface

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Socket.IO

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

## 📁 Project Structure

```text
cloud-kitchen/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env.example
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🚀 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/Swatantra35/cloud-kitchen.git
cd cloud-kitchen
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder and configure your MongoDB URI, JWT secrets, port, and other required environment variables.

Start the backend:

```bash
npm start
```

### 3. Setup Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Configure the required frontend environment variables in `frontend/.env` according to `.env.example`.

## 🔐 Environment Variables

Configure the required environment variables before running the application.

Never commit actual credentials, database passwords, JWT secrets, or private API keys to GitHub.

## 👨‍💻 Author

**Swatantra Pratap Singh**

GitHub: [Swatantra35](https://github.com/Swatantra35)

---

Made with ❤️ using React, Node.js, Express, and MongoDB.
