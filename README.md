# 🏫 Student Bazaar

A full-stack web platform developed as part of the MCA program at **GLA University** (2nd Year, 4th Semester – 2025).  
This project was designed and implemented by a 5-member team, led by **Aman Yadav** (Lead Developer).

---

## 🎯 Abstract

**Student Bazaar** is an interactive online marketplace tailored for university students to **buy, sell, or exchange used goods and services** within their campus ecosystem.  
The platform bridges the gap between students seeking affordable resources and those wishing to resell pre-owned academic items—books, electronics, accessories, etc.—in a safe, student-only environment.

---

## 🧩 Objectives

- To create a secure and authenticated platform for intra-campus transactions.  
- To simplify listing and discovery of second-hand goods.  
- To build an intuitive and responsive interface for all device types.  
- To integrate a scalable backend using Node.js and REST APIs.  
- To implement basic CRUD operations with real-time updates.

---

## ⚙️ Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | React.js (bootstrapped via Create React App) |
| **Backend** | Node.js with Express.js |
| **Database** | MongoDB |
| **Version Control** | Git & GitHub |
| **Hosting (Planned)** | Vercel / Render / Railway |
| **UI Styling** | CSS3 & React Components |

---

## 🏗️ System Architecture (Textual UML Overview)

            ┌──────────────────────────┐
            │        Frontend          │
            │  React Components (UI)   │
            └────────────┬─────────────┘
                         │ REST API Calls
                         ▼
            ┌──────────────────────────┐
            │        Backend API       │
            │  Node.js + Express.js    │
            └────────────┬─────────────┘
                         │ Mongoose ODM
                         ▼
            ┌──────────────────────────┐
            │        MongoDB           │
            │   Listings / Users / Chat│
            └──────────────────────────┘

This architecture follows an MVC-inspired separation:
- **Frontend**: handles presentation and user interaction.  
- **Backend**: manages data routing, authentication, and validation.  
- **Database**: persists structured user and listing data.

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or remote)

### Setup

```bash
git clone https://github.com/NitishB211/Student_Bazaar.git
cd Student_Bazaar
npm install
npm start
```

The app runs by default at: http://localhost:3000

For the backend:

```bash
cd backend
npm install
npm run dev
```

📚 Features Implemented

🔐 User authentication & session management

🛒 Product listings (CRUD operations)

📷 Image uploads (planned integration)

🔎 Search & filter listings

💬 Messaging system (in progress)

📱 Fully responsive design

📈 Future Enhancements

Integration of in-app chat system using WebSockets

Advanced filtering and recommendation engine

Notification center using Firebase Cloud Messaging

AI-based fraud detection for product listings

Deployment with CI/CD pipeline

🧑‍💻 Team

| Name | Role |
|------|------|
| **Aman Yadav** | Lead Developer / System Architect |
| **Nitish Bhatnagar** | UI/UX Engineer |
| **Piyush Bhagel** | Backend Developer |
| **Anish Mukherjee** | Database Engineer |
| **Ravi Roshan Kumar** | QA & Testing Lead |


📊 Conclusion

Student Bazaar demonstrates the application of full-stack web technologies in solving a real-world problem within campus boundaries.
The project focuses on practical usability, modular architecture, and scalable design, marking a step towards industry-ready development practices.

🧾 Acknowledgement

This project was developed under the guidance of the Department of Computer Applications, GLA University, as part of the Master of Computer Applications (MCA) curriculum, 2025.
