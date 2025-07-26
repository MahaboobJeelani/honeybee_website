# ---------- Stage 1: Build React frontend ----------
FROM node:20 AS frontend-builder

# Set working directory for frontend
WORKDIR /app/frontend

# Install frontend dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy all frontend source files
COPY frontend ./

# Build the frontend (React)
RUN npm run build


# ---------- Stage 2: Set up backend and serve frontend ----------
FROM node:20

# Set working directory for backend
WORKDIR /app

# Copy backend dependencies and install them
COPY package*.json ./
RUN npm install --production

# Copy backend source code
COPY backend ./backend

# Copy built frontend files from the previous stage
COPY --from=frontend-builder /app/frontend/build ./frontend/build

# Expose port (backend will run on this)
EXPOSE 8081

# Start the backend server
CMD ["node", "backend/Server.js"]
