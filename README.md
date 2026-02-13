Knovator Tech Task

A full-stack application project consisting of a Next.js frontend and a backend (API/services). The frontend is built with Next.js, and the backend contains REST APIs for the required tech tasks.

🧩 Project Structure
knovator_tech_task/
├── backend/      # Backend API
└── frontend/     # Next.js Web Client

🚀 Features
Frontend

Built with Next.js

TypeScript support

Designed to consume backend APIs

Provides UI interface for users

Backend

REST APIs (Node/Express or similar)

Authentication/CRUD operations (typical for tech tasks)

Serves JSON data to frontend

(Specific backend details should be added once implementation is inspected.)

🛠 Tech Stack
Part	Technology
Frontend	Next.js (React + TypeScript)
Backend	Node.js / Express (assumed based on folder)
Language	JavaScript / TypeScript
Styling	CSS Modules / Tailwind / Optional
API	REST
Database	(Add your DB choice: MongoDB / PostgreSQL / SQLite)
📦 Installation
🔹 Clone Repository
git clone https://github.com/kaifsherdi1/knovator_tech_task.git
cd knovator_tech_task

🧪 Setup & Run
🟢 Backend

Navigate to the backend folder:

cd backend


Install dependencies:

npm install
# or
yarn


Start the server:

npm run dev
# or
yarn dev


☑ Make sure to configure environment variables (eg: .env) for DB & secret keys.

🔵 Frontend

The frontend README already contains instructions. Example:

cd frontend
npm install
npm run dev


Then open:
📍 http://localhost:3000

This frontend uses Next.js and auto-reloads on file changes.

📌 Usage

Once both backend and frontend servers are running:

Visit http://localhost:3000

Use the UI to interact with the application.

API endpoints will be available at backend port (eg http://localhost:5000).

🧠 Learn More

Next.js Docs: https://nextjs.org/docs

Express Docs: https://expressjs.com/

Node.js Docs: https://nodejs.org/

🤝 Contributing

If you want to improve this repo:

Fork the project

Create a branch: feature/xyz

Commit your changes

Submit a pull request
