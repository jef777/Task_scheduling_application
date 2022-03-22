# Task Scheduling Fullstack Application built using Node, ReactJs and Express

Task scheduling fullstack application build React, Node.js, Express and Webpack.
Project is also configured with webpack-dev-server, eslint, prettier and babel.

  - [Development mode](#development-mode)
  - [Production mode](#production-mode)
  - [Quick Start](#quick-start)


# Development mode

The development mode we has 2 servers running. The front end code will be served by the [webpack dev server] which helps with hot and live reloading.
The server side Express code will be served by a node server using [nodemon] which helps in automatically restarting the server whenever server side code is edited.
I am using [Concurrently] to run the webpack dev server and the backend node server concurrently in the development environment

# Production mode

In the production mode, we have only 1 server running. The client side code will be bundled into static files using webpack and served by the Node.js

# Quick Start

```bash
# Clone the repository
git clone https://github.com/jef777/Task_scheduling_application

# Go inside the directory
cd Task_scheduling_application

# Install dependencies
 npm i

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

