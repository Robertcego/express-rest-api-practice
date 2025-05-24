📘 express-rest-api-practice
A TypeScript-based REST API built with Express.js, designed as a practice implementation for learning modern Node.js API development patterns. This project demonstrates clean architecture principles, type safety, and professional development tooling while maintaining simplicity suitable for educational purposes.

🚀 Project Overview
This project serves as a learning-focused REST API implementation, emphasizing:

Type Safety: Leveraging TypeScript for robust type definitions.

Clean Architecture: Separation of concerns across controllers, routes, and data layers.

Mock Data Infrastructure: In-memory data stores for development and testing.

Professional Tooling: Integration of ESLint, Prettier, and nodemon for code quality and development efficiency.

🏗️ Architecture
The application follows a layered architecture pattern with clear separation of concerns:

less
Copy
Edit
src/
├── controllers/       // Route handlers
├── infrastructure/    // Mock data and stores
├── routes/            // API route definitions
├── types/             // TypeScript interfaces and types
├── utils/             // Utility functions
└── index.ts           // Application entry point
Key Components
Controllers: Handle HTTP requests and responses.

Routes: Define API endpoints and associate them with controllers.

Mock Data: Generate and store mock user data for development purposes.

Types: Define interfaces for User and UserDetails entities.

🧪 Mock Data Infrastructure
The project includes a sophisticated mock data system for development and testing:

User Store: In-memory array of user objects with basic information.

UserDetails Store: Extended user information linked by user ID.

Data Generators: Functions to create consistent and realistic mock data.

🛠️ Development Environment
Prerequisites
Node.js (v14 or higher)

npm or Yarn

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Robertcego/express-rest-api-practice.git
cd express-rest-api-practice
Install dependencies:

bash
Copy
Edit
npm install
# or
yarn install
Running the Application
Start the development server with hot reloading:

bash
Copy
Edit
npm run dev
# or
yarn dev
The server will start on http://localhost:8080.

📚 API Reference
Health Check
GET /health
Returns the status of the API.

Users
GET /users
Retrieves a list of all users.

GET /users/:id
Retrieves detailed information for a specific user by ID.

✅ Code Quality Tools
ESLint: Linting for code consistency.

Prettier: Code formatting.

nodemon: Automatically restarts the server on code changes.

ts-node-dev: TypeScript execution environment with hot reloading.

📄 License
This project is licensed under the MIT License.

