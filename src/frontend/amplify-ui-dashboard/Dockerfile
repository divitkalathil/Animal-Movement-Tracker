FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install aws-amplify

# Copy the rest of the application
COPY . .

# Expose the port on which your application runs
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "dev"]
