FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port on which your Express app is running
EXPOSE 3002

# Command to run your Express app
CMD ["node", "server.js"]
