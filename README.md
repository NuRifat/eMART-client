# 🛒 eMART — Frontend

A modern, responsive e-commerce platform built for a seamless online shopping experience. This repository contains the frontend client powered by **React**, **Vite**, **Tailwind CSS**, and **DaisyUI**, integrated with a robust Django REST Framework backend.

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Authentication & Testing Flow](#-authentication--testing-flow)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Backend Repository](#-backend-repository)

---

## 🌟 Overview
**eMART** provides customers and sellers with an intuitive, aesthetic, and fast user interface. Designed with dynamic state management, customer cart interactions, seller verification workflows, and user authentication, eMART delivers a complete end-to-end shopping experience across mobile, tablet, and desktop devices.

---


## ✨ Key Features
- **📱 Fully Responsive UI:** Tailored user experience for desktop, tablet, and mobile browsers.
- **🔐 User Authentication:** Secure signup, login, and profile management (supporting Customer & Seller roles).
- **🛍️ Product Browsing & Filtering:** Search products and explore items by categories easily.
- **🛒 Interactive Shopping Cart:** Real-time subtotal calculations, item counters, and cart management via React Context.
- **⭐ Product Reviews & Ratings:** Leave and view product feedback.
- **⚡ Fast Performance:** Powered by Vite for rapid build times and instant hot-module replacement (HMR).

---

## 🧪 Authentication & Testing Flow

To test user registration and login in this project:

1. **Sign Up:** Navigate to `/register` and create an account with a valid email address.
2. **Check Inbox:** An activation email containing a secure verification link will be delivered to your email.
3. **Activate Account:** Click the activation link in the email to verify and activate your account.
4. **Log In:** Once activated, proceed to `/login` to access the full features of eMART.

---

## 🛠️ Tech Stack

### Core Technologies & Badges
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0E2D?style=for-the-badge&logo=daisyui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Architecture Breakdown
| Technology | Purpose |
| :--- | :--- |
| **React** | Component-based UI structure & global context state management |
| **Vite** | Next-generation frontend tooling and build engine |
| **Tailwind CSS & DaisyUI** | Utility-first styling framework and accessible UI components |
| **React Router** | Client-side routing and protected route handling |
| **JavaScript (ES6+)** | Dynamic logic, API integration, and asynchronous operations |

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **npm** installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/NuRifat/Phi-Mart.git](https://github.com/NuRifat/Phi-Mart.git)
   cd Phi-Mart
2. **Install dependencies:**
   ```bash
   npm install
3. **Install dependencies:**
   ```bash
   npm run dev
4. **Open your browser and navigate to http://localhost:5173.**

## 🔗 Backend Repository

> **eMART API Server**  
> Powered by **Django** & **Django REST Framework (DRF)** with **PostgreSQL** (via Supabase), **Cloudinary** for image & media storage, and **SimpleJWT** for secure authentication.
>
> 📌 **GitHub Repository:** [NuRifat/Phi-Mart](https://github.com/NuRifat/Phi-Mart)