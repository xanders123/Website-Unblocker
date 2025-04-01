#!/bin/bash

# Deployment script for School Website Unblocker
# This script helps set up and run the proxy application

echo "=== School Website Unblocker Setup ==="
echo "This script will help you set up and run the proxy application."

# Check if Node.js is installed
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo "✓ Node.js is installed (version: $NODE_VERSION)"
else
    echo "✗ Node.js is not installed."
    echo "Please install Node.js from https://nodejs.org/ (version 14 or higher)"
    exit 1
fi

# Check if npm is installed
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo "✓ npm is installed (version: $NPM_VERSION)"
else
    echo "✗ npm is not installed."
    echo "npm should be included with Node.js. Please reinstall Node.js."
    exit 1
fi

# Install dependencies
echo ""
echo "Installing dependencies..."
npm install

# Start the server
echo ""
echo "Starting the proxy server..."
echo "The server will run on http://localhost:3000"
echo "Press Ctrl+C to stop the server"
echo ""
node src/index.js
