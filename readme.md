Node.js Math API Project

This project is a simple Node.js + Express backend that exposes RESTful API endpoints to solve various mathematical problems, using Prisma ORM and an SQLite database.

🚀 Features

✅ 2–5 RESTful API endpoints for math operations

🧠 Supports addition, factorial, Fibonacci, and square

📦 Prisma ORM with SQLite for storing operation results

🧱 MVC architecture for clean code structure

🧪 Unit testing with Jest and Supertest

📋 Middleware for logging and error handling

📦 Setup Instructions

Clone the repo & install dependencies:

git clone <repo-url>
cd <project-folder>
npm install

Initialize Prisma and DB:

npx prisma init
npx prisma migrate dev --name init

Start the server:

npm run dev

App should be running at: http://localhost:3000

Running Tests

Make sure the app is not running (to avoid port conflicts)

Run tests:

npm test

Tests are written using Jest + Supertest to validate endpoints.

🔍 Viewing the Database

To explore the SQLite DB (dev.db):

Use a GUI tool like DB Browser for SQLite

Open the file dev.db

Browse the Operation table to view past results