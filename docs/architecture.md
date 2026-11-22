# Portfolio Architecture

## 1. Project Overview

A full-stack developer portfolio built using
the PERN stack.

The application consists of:

- Public-facing portfolio website
- Protected administration dashboard
- REST API backend
- PostgreSQL relational database
- External service integrations

## 2. Technology Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- React Router
- TanStack Query

### Backend
- Node.js
- Express 5
- TypeScript
- Zod
- Better Auth

### Database
- PostgreSQL
- Drizzle ORM

### External Services
- Resend
- PostHog
- Image storage provider

## 3. Repository Architecture

my_portfolio/
├── client/
├── server/
├── docs/
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

## 4. Application Responsibilities

### Client
Responsible for:
- Public portfolio interface
- Admin dashboard interface
- Routing and UI state
- API communication
- Form interactions

### Server
Responsible for:
- REST API
- Authentication
- Authorization
- Business logic
- Request validation
- Database operations
- Email integration

### Docs
Contains:
- Architecture documentation
- Technical decisions
- API documentation

## 5. Communication Flow

React Client
    |
    | HTTP / REST
    v
Express Backend
    |
    v
Service Layer
    |
    v
PostgreSQL Database

External services:
- Resend for email delivery
- PostHog for analytics

## 6. Development Commands

npm install

npm run dev

npm run typecheck

npm run lint

npm run build

## 7. Environment Configuration

Backend:
- server/.env
- server/.env.example

Frontend:
- client/.env
- client/.env.example

Never commit actual environment files or secrets.

## 8. Architectural Principles

- Separation of concerns
- Feature-oriented development
- Type safety
- API-driven communication
- Reusable components
- Centralized error handling
- Secure authentication
- Database integrity
- Performance-conscious UI