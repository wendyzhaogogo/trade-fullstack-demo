# Trade Commission System

A full-stack application for managing and tracking trading commissions and referrals.

## Project Structure

This is a monorepo project using pnpm workspaces with two main applications:

- `apps/web`: Frontend React application (Vite + TypeScript + Tailwind CSS)
- `apps/server`: Backend Express server (TypeScript)

## Features

- User authentication (mock)
- Trading data visualization
- Referral system with one-level commission structure
- Real-time statistics for:
  - Total trading volume
  - Total fees
  - Number of referrals
  - Total commission earnings

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

To run both frontend and backend in development mode:

1. Start the backend server:
   ```bash
   pnpm dev:server
   ```

2. Start the frontend development server:
   ```bash
   pnpm dev:web
   ```

The frontend will be available at `http://localhost:5173`
The backend API will be available at `http://localhost:3000`

## Project Structure

```
trade-fullstack-demo/
├── apps/
│   ├── web/           # Frontend React application
│   └── server/        # Backend Express server
├── package.json
└── pnpm-workspace.yaml
```

## Technology Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express
- TypeScript
- CORS 