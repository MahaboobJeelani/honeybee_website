# # Step 1: Build frontend (React/Vite)
# FROM node:20 AS frontend-builder

# WORKDIR /app/frontend

# COPY ../frontend/package*.json ./
# RUN npm install

# COPY ../frontend .
# RUN npm run build


# # Step 2: Build backend
# FROM node:18

# WORKDIR /app/backend

# # Copy backend package files and install
# COPY package*.json ./
# RUN npm install

# # Copy backend source
# COPY . .

# # Copy built frontend into backend/public
# COPY --from=frontend-builder /app/frontend/build ./public

# # Set environment variables and expose port
# ENV NODE_ENV=production
# EXPOSE 8080

# CMD ["node", "Server.js"]


# Step 1: Build frontend
FROM node:18 AS frontend-builder

WORKDIR /app/frontend

COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend .
RUN npm run build

# Step 2: Setup backend
FROM node:18

WORKDIR /app/backend

COPY ./package*.json ./
RUN npm install

COPY ./backend .

# Copy built frontend into backend/public
COPY --from=frontend-builder /app/frontend/build ./public

EXPOSE 8080
CMD ["node", "Server.js"]
