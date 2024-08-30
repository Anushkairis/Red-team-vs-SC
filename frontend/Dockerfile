# Use an official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use an official Nginx image to serve the built files
FROM nginx:alpine

# Copy the built files to Nginx's default public directory
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start Nginx
CMD ["npm","Start"]
