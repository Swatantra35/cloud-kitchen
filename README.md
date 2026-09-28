# 🥟 Cloud Kitchen — MERN Stack Food Delivery Application

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.19-000000?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/atlas)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

A production-ready, full-stack Cloud Kitchen & Food Delivery Web Application built using the **MERN** stack (MongoDB Atlas, Express.js, React, Node.js) with **Vite**, **Socket.io** real-time updates, and **Razorpay** online payment integration.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [Prerequisites](#-prerequisites)
- [Environment Variables](#-environment-variables)
- [Installation & Setup](#-installation--setup)
- [Running the Application](#-running-the-application)
- [API Reference](#-api-reference)
- [Screenshots](#-screenshots)
- [Security Practices](#-security-practices)
- [License & Acknowledgments](#-license--acknowledgments)

---

## 🌟 Overview

**Cloud Kitchen** provides an end-to-end digital food ordering and kitchen management experience. It features three distinct interfaces integrated into a single platform:
1. **Customer Web App**: Browse menus, filter items, place orders via Cash on Delivery (COD) or Razorpay online checkout, apply discount coupons, and track orders in real time.
2. **Admin Control Panel**: Comprehensive kitchen operational dashboard for tracking sales analytics, managing food items, updating order statuses, configuring store parameters, managing discount coupons, and rider accounts.
3. **Delivery Partner App**: Mobile-responsive rider interface for receiving available delivery assignments, accepting orders, toggling duty availability, updating delivery progress, and broadcasting live location coordinates.

---

## ✨ Key Features

### 🛒 Customer Interface
- **User Authentication**: Secure JWT-based registration, login, profile management, and password updates.
- **Dynamic Food Menu**: Categorized menu browsing (Momos, Rolls, Snacks, Sides, Drinks), search indexing, dietary tags (Veg/Non-Veg/Spicy), and popularity indicators.
- **Cart & Order Management**: Persistent shopping cart with half/full portion support and subtotal calculation.
- **Multiple Payment Gateways**: Cash on Delivery (COD) and Razorpay checkout with webhook verification & payment retry options.
- **Real-Time Order Tracking**: Order status progression (Confirmed $\rightarrow$ Preparing $\rightarrow$ Out for Delivery $\rightarrow$ Delivered) with interactive Leaflet map integration.
- **Discount Coupons**: Promo code validation and discount computation during checkout.

### 🛡️ Admin Dashboard
- **Real-Time Analytics**: Daily, weekly, monthly sales figures, revenue tracking, and popular item breakdown.
- **Order Pipeline Control**: Status management across all incoming customer orders.
- **Menu Management (CRUD)**: Create, update, toggle availability, or soft/hard delete food items.
- **Rider & Account Management**: Add delivery partners, monitor rider activity, and toggle customer account status.
- **Store Settings**: Customize delivery charges, minimum order limits, operating hours, and store parameters.

### 🛵 Delivery Partner Portal
- **Role-Based Login**: Dedicated authentication for registered delivery personnel.
- **Order Dispatch Queue**: View available kitchen orders, accept delivery jobs, and update delivery status.
- **Duty Toggle**: Toggle active/sleep availability state.
- **Real-Time GPS Broadcasting**: Push location pings to customers and admins via WebSockets while orders are out for delivery.

---

## 🛠 Tech Stack

### Frontend
| Technology | Description |
| :--- | :--- |
| **React 18** | UI framework with functional components and hooks |
| **Vite 5** | High-performance frontend build tool & development server |
| **TailwindCSS 4** | Utility-first CSS framework for modern styling |
| **Framer Motion** | Micro-interactions, slide animations, and page transitions |
| **Lucide React** | Modern icon set |
| **Leaflet & React-Leaflet** | Interactive mapping for real-time order & delivery tracking |
| **Socket.io Client** | Real-time WebSocket event listeners for order & rider updates |

### Backend
| Technology | Description |
| :--- | :--- |
| **Node.js (>=18)** | Server-side JavaScript runtime environment |
| **Express.js 4** | Web framework for API routes and middleware |
| **MongoDB Atlas & Mongoose 8** | Cloud NoSQL database with Object Data Modeling (ODM) |
| **JSON Web Tokens (JWT)** | Authenticated role-based sessions (`user`, `admin`, `delivery`) |
| **bcryptjs** | Password hashing algorithm |
| **Socket.io** | Server-side WebSockets for real-time room broadcasts |
| **Razorpay Node SDK** | Payment gateway order generation and signature verification |
| **Helmet & Express Rate Limit** | HTTP security headers & endpoint request throttling |
| **Express Validator** | Request payload validation and sanitization |

---

## 📁 Project Architecture & Directory Structure

```
Cloud-kitchen/
├── backend/
│   ├── config/
│   │   ├── db.js                 # MongoDB Atlas connection setup
│   │   ├── firebase.js           # Firebase admin setup (push notifications)
│   │   └── razorpay.js           # Razorpay client initialization
│   ├── controllers/
│   │   ├── adminAuthController.js # Admin authentication logic
│   │   ├── adminUserController.js # User management logic
│   │   ├── authController.js      # Customer authentication controller
│   │   ├── contactController.js   # Contact form submissions
│   │   ├── couponController.js    # Coupon management & validation
│   │   ├── deliveryController.js  # Delivery partner operations & GPS tracking
│   │   ├── menuController.js      # Public & admin menu management
│   │   ├── notificationController.js # System notification services
│   │   ├── orderController.js     # Order placement, Razorpay verification & tracking
│   │   ├── pushController.js      # Device token registration
│   │   └── settingController.js   # Store settings configuration
│   ├── middleware/
│   │   ├── auth.js               # JWT verification (protect, adminProtect, deliveryProtect)
│   │   ├── errorHandler.js       # Centralized error handler & 404 middleware
│   │   └── validators.js         # express-validator rules
│   ├── models/
│   │   ├── Admin.js              # Admin schema
│   │   ├── Coupon.js             # Coupon schema
│   │   ├── DeliveryCredential.js # Delivery partner schema
│   │   ├── MenuItem.js           # Menu item schema
│   │   ├── Order.js              # Order schema
│   │   ├── Setting.js            # Store settings schema
│   │   └── User.js               # Customer schema
│   ├── routes/
│   │   ├── admin.js              # Admin endpoints
│   │   ├── auth.js               # Customer auth endpoints
│   │   ├── contact.js            # Contact form endpoint
│   │   ├── coupons.js            # Coupon endpoints
│   │   ├── delivery.js           # Delivery partner endpoints
│   │   ├── geocode.js            # Geocoding endpoints
│   │   ├── menu.js               # Menu endpoints
│   │   ├── orders.js             # Order endpoints & webhooks
│   │   └── settings.js           # Public settings endpoint
│   ├── scripts/
│   │   └── seed.js               # Database seeding script for default items & settings
│   ├── server.js                 # Express server & Socket.io entry point
│   ├── .env.example              # Template for backend environment variables
│   └── package.json
│
└── frontend/
    ├── public/                   # Static assets & public files
    ├── src/
    │   ├── admin/                # Admin sub-components (dashboard, orders, menu, users)
    │   ├── assets/               # Brand logos and images
    │   ├── components/           # Reusable UI components (header, footer, cards, modals)
    │   ├── context/              # React Context (AuthContext, NavigationContext, NotificationContext)
    │   ├── data/                 # Static data configurations
    │   ├── delivery/             # Delivery partner sub-components
    │   ├── hooks/                # Custom React hooks (useCart)
    │   ├── pages/                # Main view pages (HomePage, MenuPage, CheckoutPage, etc.)
    │   ├── services/             # API client (api.js) and Socket service (socket.js)
    │   ├── App.jsx               # Main application component & routing wrapper
    │   ├── index.css             # Design tokens & Tailwind imports
    │   └── main.jsx              # React DOM entry point
    ├── .env.example              # Template for frontend environment variables
    ├── tailwind.config.js        # Tailwind CSS configuration
    ├── vite.config.js            # Vite bundle configuration
    └── package.json
```

---

## 📋 Prerequisites

Before running the project locally, ensure you have the following installed:
- **Node.js**: `v18.0.0` or higher ([Download Node.js](https://nodejs.org/))
- **npm**: `v9.0.0` or higher (comes bundled with Node.js)
- **MongoDB Atlas Connection URI**: A free MongoDB Atlas cluster ([MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Razorpay Key ID & Secret**: (Optional, for testing online payments) ([Razorpay Dashboard](https://dashboard.razorpay.com/))

---

## 🔑 Environment Variables

### Backend Configuration (`backend/.env`)

Create a `.env` file in the `backend/` directory using the template below:

```env
# Database Connection
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/cloudkitchen?retryWrites=true&w=majority

# Server Port & Environment
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173,http://127.0.0.1:5173

# JWT Authentication Secrets
JWT_SECRET=your_customer_jwt_secret_key_change_in_production
JWT_EXPIRES_IN=7d

JWT_ADMIN_SECRET=your_admin_jwt_secret_key_change_in_production
JWT_ADMIN_EXPIRES_IN=1d

JWT_DELIVERY_SECRET=your_delivery_jwt_secret_key_change_in_production
JWT_DELIVERY_EXPIRES_IN=12h

# Razorpay Credentials (Optional for local testing)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret
```

### Frontend Configuration (`frontend/.env`)

Create a `.env` file in the `frontend/` directory using the template below:

```env
# Backend API Base Endpoint
VITE_API_URL=http://localhost:5000/api
```

---

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/cloud-kitchen.git
cd cloud-kitchen
```

### 2. Set Up Backend
```bash
cd backend
npm install
```

Configure your `backend/.env` file with your MongoDB Atlas URI and JWT secrets as shown in the [Environment Variables](#-environment-variables) section.

### 3. Seed Initial Database Data
Populate default menu items and store settings in MongoDB Atlas:
```bash
npm run seed
```

### 4. Set Up Frontend
Open a new terminal window, navigate to the `frontend/` directory, and install dependencies:
```bash
cd frontend
npm install
```

Configure your `frontend/.env` file with `VITE_API_URL=http://localhost:5000/api`.

---

## 🏃 Running the Application

### Start Backend Dev Server
In the `backend/` directory:
```bash
npm run dev
```
The backend API server will start at: `http://localhost:5000`  
Health check endpoint: `http://localhost:5000/api/health`

### Start Frontend Dev Server
In the `frontend/` directory:
```bash
npm run dev
```
The Vite development server will start at: `http://localhost:5173`

---

## 📡 API Reference

### 🔓 Public & Customer Endpoints

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Service health status check | No |
| `POST` | `/api/auth/register` | Register a new customer account | No |
| `POST` | `/api/auth/login` | Authenticate customer credentials | No |
| `GET` | `/api/auth/me` | Fetch authenticated customer profile | Customer JWT |
| `PUT` | `/api/auth/me` | Update customer profile details | Customer JWT |
| `GET` | `/api/menu` | Fetch food menu items (supports query parameters) | No |
| `GET` | `/api/menu/:id` | Fetch details for a single menu item | No |
| `POST` | `/api/orders` | Place a new order (COD or Online) | Optional |
| `POST` | `/api/orders/verify-payment` | Verify Razorpay payment signature | Optional |
| `POST` | `/api/orders/:id/retry-payment` | Generate fresh Razorpay checkout for pending order | Optional |
| `GET` | `/api/orders/my` | Fetch authenticated customer's order history | Customer JWT |
| `GET` | `/api/orders/:id` | Track order by ID or order number | Optional |
| `POST` | `/api/orders/:id/cancel` | Cancel order before preparation starts | Optional |
| `POST` | `/api/coupons/validate` | Validate promo code and calculate discount | Optional |
| `POST` | `/api/contact` | Submit customer query or message | No |

### 🛡️ Admin Endpoints

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/admin/login` | Authenticate admin credentials | No |
| `GET` | `/api/admin/dashboard` | Fetch sales analytics and stat counters | Admin JWT |
| `GET` | `/api/admin/orders` | List all customer orders | Admin JWT |
| `PATCH` | `/api/admin/orders/:id/status` | Update order processing status | Admin JWT |
| `POST` | `/api/admin/menu` | Create a new food menu item | Admin JWT |
| `PUT` | `/api/admin/menu/:id` | Update an existing menu item | Admin JWT |
| `DELETE` | `/api/admin/menu/:id` | Delete a menu item | Admin JWT |
| `GET` | `/api/admin/delivery-boys` | List all registered delivery riders | Admin JWT |
| `POST` | `/api/admin/delivery-boys` | Register a new delivery rider | Admin JWT |
| `GET` | `/api/admin/coupons` | List active discount coupons | Admin JWT |
| `POST` | `/api/admin/coupons` | Create a new discount coupon | Admin JWT |

### 🛵 Delivery Partner Endpoints

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/delivery/login` | Authenticate rider credentials | No |
| `GET` | `/api/delivery/orders` | Fetch active kitchen orders available for delivery | Delivery JWT |
| `POST` | `/api/delivery/orders/:id/accept` | Accept an available delivery job | Delivery JWT |
| `PATCH` | `/api/delivery/orders/:id/status` | Update status to "Out for Delivery" or "Delivered" | Delivery JWT |
| `PATCH` | `/api/delivery/orders/:id/location` | Push rider GPS location update via WebSockets | Delivery JWT |
| `PATCH` | `/api/delivery/sleep` | Toggle rider duty availability state | Delivery JWT |

---

## 📸 Screenshots

*(Placeholders for application UI screenshots)*

| Customer Menu View | Order Tracking Page |
| :---: | :---: |
| ![Menu Page](https://via.placeholder.com/600x350?text=Customer+Menu+Interface) | ![Order Tracking](https://via.placeholder.com/600x350?text=Real-Time+Order+Tracker) |

| Admin Dashboard | Delivery Partner Interface |
| :---: | :---: |
| ![Admin Dashboard](https://via.placeholder.com/600x350?text=Admin+Analytics+Dashboard) | ![Delivery App](https://via.placeholder.com/600x350?text=Delivery+Partner+Portal) |

---

## 🔒 Security Practices

- **Role-Based Token Isolation**: Separate JWT secrets and token scopes are enforced for Customer, Admin, and Delivery sessions.
- **Raw Webhook Verification**: The Razorpay webhook endpoint parses raw request byte streams to verify HMAC signatures securely.
- **Defense in Depth**: Fallback secrets and sanitization defaults ensure the backend gracefully handles edge cases.
- **Rate Limiting**: Request rate limiters throttle brute-force authentication and spam order attempts.
- **Environment Isolation**: All sensitive database credentials, secrets, and API keys are stored in environment variables excluded from version control (`.gitignore`).

---

## 📄 License & Acknowledgments

This project is open-source software licensed under the **[MIT License](LICENSE)**.

### Credits
- Design inspiration and UI micro-interactions built with **Framer Motion** & **TailwindCSS**.
- Icons provided by **Lucide React**.
- Map rendering powered by **Leaflet** & **OpenStreetMap / Nominatim**.
