# Use a Node.js base image
FROM node:14-alpine 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Expose port 80
EXPOSE 80

# Command to run the application
CMD ["npm", "start"]
