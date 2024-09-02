# Use a more recent version of Node.js
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /srv

# Copy all files from the current directory to the working directory in the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "server.js"]
