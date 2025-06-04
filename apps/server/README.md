# Trade System Server

A modern trading system backend built with NestJS and GraphQL, featuring user management, trading statistics, and a referral system.

## Overview

This server application is part of a full-stack trading system demo. It provides a GraphQL API for managing users, tracking trading activities, and handling referral relationships with commission calculations.

## Tech Stack

- **Framework**: NestJS
- **API**: GraphQL with Apollo Server
- **Language**: TypeScript
- **Package Manager**: pnpm

## Core Features

### User Management
- User registration and profile management
- User querying and filtering
- Referral relationship tracking

### Trading Statistics
- Trading volume tracking
- Fee calculations
- Commission management for referrals

### Referral System
- User referral tracking
- Commission calculation based on referral activities

## Project Structure

The project follows a modular architecture with clear separation of concerns:

### Modules

- **AppModule**: Root module that bootstraps the application
  - GraphQL configuration
  - Module orchestration
  - Basic app setup

- **UsersModule**: Core user functionality
  - User queries and management
  - Referral system integration
  - Dependencies: MockModule, UserStatsModule

- **UserStatsModule**: Trading statistics
  - Trading volume tracking
  - Commission calculations
  - Dependencies: MockModule

- **MockModule**: Development data
  - Mock data services
  - Development and testing support

### Directory Structure

```
src/
├── modules/           # Feature modules
│   ├── users.module.ts
│   ├── user-stats.module.ts
│   └── mock.module.ts
├── resolvers/         # GraphQL resolvers
│   ├── users.resolver.ts
│   └── user-stats.resolver.ts
├── services/         # Business logic
│   ├── users.service.ts
│   ├── user-stats.service.ts
│   └── mock.service.ts
├── models/           # GraphQL models
│   ├── user.model.ts
│   └── user-stats.model.ts
├── mock/            # Mock data
│   └── data.ts
└── app.module.ts    # Root module
```

## API Documentation

### GraphQL Queries

#### Users
```graphql
# Get all users
query {
  users {
    id
    username
  }
}

# Get specific user
query {
  user(id: "user_id") {
    id
    username
  }
}

# Get user referrals
query {
  referrals(userId: "user_id") {
    id
    username
  }
}
```

#### User Statistics
```graphql
# Get user stats
query {
  user(id: "user_id") {
    stats {
      totalTradingVolume
      totalFees
      totalCommission
    }
  }
}
```

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- pnpm

### Installation

```bash
# Install dependencies
$ pnpm install

# Start development server
$ pnpm run start:dev

# Build for production
$ pnpm run build

# Start production server
$ pnpm run start:prod
```

### Development

```bash
# Start in development mode with hot reload
$ pnpm run start:dev

# Run tests
$ pnpm run test

# Run e2e tests
$ pnpm run test:e2e

# Generate test coverage
$ pnpm run test:cov
```

## Testing

The project includes comprehensive testing setup:
- Unit tests for services and resolvers
- E2E tests for API endpoints
- Test coverage reporting

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 