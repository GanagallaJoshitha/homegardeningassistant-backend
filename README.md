# ⚙️ Nurture AI | Backend API
> **Robust Node.js Engine for the Nurture Gardening Ecosystem**

This repository contains the RESTful API that powers the Nurture Gardening Assistant. It manages user authentication, plant collection data, and community social interactions.

---

## 🚀 Project Overview
The Nurture Backend is built with a modular architecture to ensure scalability and security. It serves as the bridge between the React frontend and the Supabase PostgreSQL database, handling complex logic for plant care schedules and AI diagnostic processing.



## 🛠️ Tech Stack
* **Runtime:** [Node.js](https://nodejs.org/)
* **Framework:** [Express.js](https://expressjs.com/)
* **Database:** [Supabase](https://supabase.com/) (PostgreSQL)
* **Auth:** [JWT](https://jwt.io/) (JSON Web Tokens)
* **Deployment:** [Render](https://render.com/)

## 📊 Database Schema Explanation
The database is structured to handle relational data between users and their botanical collections:

1. **Users Table:** Stores UUIDs, encrypted passwords, and profile metadata.
2. **Plants_Library:** A global read-only catalog of plant species and their scientific care requirements.
3. **User_Garden:** A relational table linking Users to specific Plants, storing "Last Watered" timestamps and health status.
4. **Community_Posts:** Stores user-generated content, image references, and engagement metrics (likes/comments).



## 📖 API Documentation

### Authentication
| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/auth/register` | POST | Creates a new user account |
| `/api/auth/login` | POST | Validates credentials and returns a JWT |
| `/api/auth/me` | GET | Returns the currently authenticated user's profile |

### Plant Management
| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/plants` | GET | Fetches all plants from the global library |
| `/api/garden` | GET | Retrieves the authenticated user's personal garden |
| `/api/garden` | POST | Adds a new plant to the user's collection |

---

## ⚙️ Installation Steps

### 1. Clone the Repository
` ` `
git clone [https://github.com/GanagallaJoshitha/home-garden-assistant-backend.git](https://github.com/GanagallaJoshitha/home-garden-assistant-backend.git)
cd home-garden-assistant-backend
` ` `
### 2. Install Dependencies
` ` `
npm install
` ` `
### 3. Environment Setup
Create a .env file in the root directory and add your credentials:
Code snippet:
` ` `
PORT=5000
DATABASE_URL=your_supabase_connection_string
JWT_SECRET=your_secure_random_string
` ` `
### 4. Run the Server
` ` `
npm start
` ` `
### 🔗 Deployment Link
Live API (Render): [Link Pending Deployment]
