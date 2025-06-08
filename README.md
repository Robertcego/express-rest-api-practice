# 📘 express-rest-api-practice

A TypeScript-based REST API built with Express.js, designed as a practice
implementation for learning modern Node.js API development patterns.  
This project demonstrates clean architecture principles, type safety, and
professional development tooling while maintaining simplicity suitable for
educational purposes.

---

## 🚀 Project Overview

This project serves as a learning-focused REST API implementation, emphasizing:

- **Type Safety**: Leveraging TypeScript for robust type definitions.
- **Clean Architecture**: Separation of concerns across controllers, routes, and
  data layers.
- **Mock Data Infrastructure**: In-memory data stores for development and
  testing.
- **Testing with Mocha**: Includes unit and integration testing using `mocha`
  and Node’s native `assert` module.
- **Professional Tooling**: ESLint, Prettier, nodemon, and ts-node-dev for a
  clean and productive dev workflow.

---

## 🏗️ Architecture

The application follows a layered architecture pattern with clear separation of
concerns:

```
src/
├── controllers/       // Route handlers (CRUD logic)
├── infrastructure/    // Mock data generators and stores
├── routes/            // API route definitions
├── services/          // Shared logic and abstractions
├── types/             // TypeScript interfaces and models
├── tests/             // Unit/integration test specs
└── index.ts           // Application entry point
```

---

## 🧪 Testing Setup

This project uses `mocha` with native `assert` for writing and running tests.  
Test files are named using the `.spec.ts` convention and organized under
`/tests`.

### 📜 Test Scripts

```bash
# Run all tests
npm run test

# Run only unit tests
npm run test:unit

# Run only integration tests
npm run test:integration

# Run with coverage (if integrated later with nyc)
npm run test:coverage
```

> You can organize your test files by prefixing them accordingly (e.g.,
> `user.unit.spec.ts`, `user.integration.spec.ts`).

---

## 📋 Development Tasks

Here’s a checklist of current and pending work:

### ✅ Core Functionality

- [x] GET all users (`/users`)
- [x] GET user by ID (`/users/:id`)
- [x] POST new user
- [x] PUT update user
- [x] DELETE user

### ✅ Mock Data System

- [x] Centralized store for users
- [x] Generator functions for users and user details
- [x] UserDetails linked to user by ID

### 🧪 Testing

- [ ] Unit tests for controllers
- [ ] Integration tests for full request flow
- [ ] Error cases and edge test coverage
- [ ] Service logic testing (if applicable)

### 🛠️ Planned Improvements

- [ ] Add middleware for validation using JOI
- [ ] Add error handling middleware
- [ ] Extract service logic into reusable modules
- [ ] Implement proper response structure for all endpoints

---

## 🛠️ Development Environment

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/Robertcego/express-rest-api-practice.git
cd express-rest-api-practice
npm install
```

### Running the Server

```bash
npm run dev
```

Server will run on [http://localhost:3000](http://localhost:3000) or your custom
`PORT` defined in `.env`.

---

## 📦 Available Scripts

```json
"scripts": {
  "dev": "nodemon",
  "lint": "eslint . --ext .ts",
  "lint:fix": "eslint . --ext .ts --fix",
  "format": "prettier --write .",
  "test": "mocha -r ts-node/register tests/**/*.spec.ts",
  "test:unit": "mocha -r ts-node/register tests/unit/**/*.spec.ts",
  "test:integration": "mocha -r ts-node/register tests/integration/**/*.spec.ts",
  "test:coverage": "nyc npm run test"
}
```

> Ensure to install `nyc` if using coverage: `npm install --save-dev nyc`

---

## 📚 API Reference

### Health Check

- `GET /health` – returns `{ status: 'ok' }`

### Users

- `GET /users` – returns array of users
- `GET /users/:id` – returns user details
- `POST /users` – adds new user
- `PUT /users/:id` – updates user
- `DELETE /users/:id` – removes user

---

## ✅ Code Quality Tools

- **ESLint** – static code analysis
- **Prettier** – formatting consistency
- **ts-node-dev** – dev server with hot-reload
- **nodemon** – watches file changes
- **Mocha** – testing framework
- **Assert** – native Node.js assertion

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

This project is part of a personal learning journey into backend development and
clean architecture patterns in Node.js with TypeScript. Feel free to fork,
explore, and adapt!

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Robertcego/express-rest-api-practice)
