# 📖 Blog Application

A full-stack blogging platform developed using **Spring Boot**, **React**, **JWT Authentication**, and **MySQL**.

The application provides secure user authentication and authorization, allowing users to create and view blog posts while administrators can manage blog content through role-based access control.

---

## 🚀 Features

- User Registration and Login
- JWT-based Authentication and Authorization
- Role-Based Access Control (USER / ADMIN)
- Create Blog Posts
- View All Blog Posts
- Admin-Only Blog Deletion
- User Profile Page
- Secure REST APIs using Spring Security
- MySQL Database Integration
- Responsive React Frontend
- Cross-Origin Support for Frontend–Backend Communication

---

## 🛠️ Tech Stack

### Backend
- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT (JSON Web Token)
- Maven

### Frontend
- React
- Vite
- Bootstrap
- JavaScript
- HTML
- CSS

### Database
- MySQL

---

## 🔐 Authentication Flow

1. User registers with a username, email, and password.
2. Passwords are securely encrypted using BCrypt.
3. User logs in and receives a JWT token.
4. The JWT token is sent with protected API requests.
5. Spring Security validates the token and authorizes access based on user roles.

---

## 👨‍💻 User Capabilities

### User
- Register a new account
- Login securely
- Create blog posts
- View all blog posts
- Manage personal profile
- Logout securely

### Admin
- View all blog posts
- Delete any blog post
- Access admin dashboard
- Manage platform content

---

## 📂 Project Structure

### Backend
- Controllers
- Services
- Repositories
- Entities
- DTOs
- Security (JWT & Spring Security)
- Configuration

### Frontend
- Login Page
- Registration Page
- Home Page
- Profile Page
- Admin Dashboard
- React Routing
- API Integration

---
