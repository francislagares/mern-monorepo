![Image](https://res.cloudinary.com/jobber-app/image/upload/v1684787771/github-banners/mern_tvu7kz.webp)

# MERN Monorepo Starter

This repository is built with pnpm workspaces and contains API Node.js Server and React Frontend UI .

- Node.js: Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js brings JavaScript to the server
- MongoDB: A document-based open source database
- Express: A Fast, unopinionated, minimalist web framework for Node.js
- React: A JavaScript front-end library for building user interfaces

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/francislagares/mern-monorepo/ci.yaml?style=for-the-badge)

## Packages

- [x] Express.js 4.18.2
- [x] React 18.2.0
- [x] React-dom 18.2.0
- [x] React Router 6.6

## Tooling

- [x] ES6
- [x] Eslint
- [x] Prettier
- [x] Precomit Lint
- [x] Versioning

## Monorepo

- [x] Pnpm workspaces

# Setup Instructions

## 1. Running Locally

To run the API locally:

1. Clone the repository and install dependencies.

```sh
# clone repository
git clone git@github.com:francislagares/github-org-finder.git

# cd into
cd github-org-finder

# install required dependencies
pnpm install
```

<br />

## **Environment Variables**

The API requires the following environment variables. Configure these in a `.env` or `.env.development.local` file in the api directory.

```env
GITHUB_SECRET=your_github_secret
REDIS_HOST=localhost
DATABASE_URL=mongodb://localhost:27017/mern_db
CORS_ORIGIN=http://localhost:5173
```

## Running with Docker

To run the API using Docker:

1. Ensure Docker and Docker Compose are installed and running on your system.

2. Create a `.env` or `.env.development.local` file in the api directory with the following Docker environment variables.

```env
GITHUB_SECRET=your_github_secret
REDIS_HOST=redis
DATABASE_URL=mongodb://mongodb:27017/mern_db
CORS_ORIGIN=http://localhost:5173
```

3. Build and start the Docker containers:

```sh
docker-compose up --build
```

4. Verify the API is running by accessing http://localhost:4000/api/v1/health

<br />

## Author

- [Francis Lagares](https://www.linkedin.com/in/francislagares)
- [Portfolio](https://francislagares.vercel.app/)

## All contributions are welcome

Contributions are more than welcomed.

Feel free to open issues for asking questions, suggesting features or other things!
