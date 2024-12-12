# Use the node alpine image as the base image
FROM node:alpine

# Install necessary packages and enable corepack
RUN apk update && apk add --no-cache nodejs && corepack enable

# Set the working directory to /app
WORKDIR /api

# Copy only the package.json file initially for installing dependencies
COPY package.json .

# Install dependencies using pnpm
RUN pnpm install

# Copy all files from the host to the container's working directory
COPY . .

# Expose port 4000
EXPOSE 4000

# Command to run the application
CMD ["pnpm", "start:dev"]
