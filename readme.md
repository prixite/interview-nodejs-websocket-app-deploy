
# Node.js WebSocket App

This project is a basic Node.js application that includes an HTTP server and WebSocket. The HTTP server provides a REST API to list users connected via WebSocket along with their connection status.

## Overview

The purpose of this test is to evaluate your ability to:
- Dockerize a Node.js application.
- Deploy a Dockerized application to AWS ECR (Elastic Container Registry).
- Pull and run the Docker image on an EC2 instance.
- Implement CI/CD using GitHub Workflows.

## Application Functionality

- **HTTP Server**: 
  - Endpoint: `GET /`
  - Description: Returns a list of users connected via WebSocket along with their connection status (connected/disconnected).

- **WebSocket Server**:
  - Endpoint: `ws://<your-server-ip>`
  - Description: Allows clients to connect via WebSocket. Each client is assigned a unique user ID. Connection and disconnection statuses are tracked and reflected in the HTTP endpoint response.

## Setup

### Prerequisites

- Node.js
- TypeScript

### Installation

0. Copy env file:
   ```sh
   cp env.sample .env
   ```

1. Install dependencies:
   ```sh
   npm install
   ```

2. Run the application:
   ```sh
   npm start
   ```

## Testing the Application

### REST API

You can test the REST API endpoint using Postman or `curl`:

```sh
curl http://localhost:3000/
```

## CI/CD with GitHub Workflows

### Steps to Implement

1. **Dockerize the Application**: Create a `Dockerfile` to containerize the application.

2. **Create a GitHub Workflow**: 
   - Set up a workflow file at `.github/workflows/deploy.yml`, which should be triggered on push to main
   - The workflow should:
     - Build the Docker image.
     - Push the Docker image to AWS ECR.
     - Deploy the Docker image to an EC2 instance.

### Setting Secrets in GitHub

Set all the secrets on Github repository

## Expected Behavior

If the deployment is done correctly:
- The HTTP server should be accessible via `http://<your-server-ip>/` and return a list of users with their connection statuses.
- The WebSocket server should be accessible via `ws://<your-server-ip>/ws` and allow clients to connect, send messages, and handle connection/disconnection events correctly.
