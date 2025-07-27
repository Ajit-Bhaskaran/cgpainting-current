#!/bin/bash

echo "=== STARTING BUILD PROCESS ==="

# Install dependencies
echo "Installing dependencies..."
npm ci --legacy-peer-deps
echo "Dependencies installed successfully"

# Build the application
echo "Building the application..."
npm run build
echo "Build completed successfully"

# Show current directory
echo "Current directory:"
pwd

# Show contents of current directory
echo "Contents of current directory:"
ls -la

# Show contents of out directory
echo "Contents of out directory:"
ls -la out/

# Copy build files to root directory
echo "Copying build files to root directory..."
cp -r out/* .

# Show final contents
echo "Final contents of root directory:"
ls -la

# Verify index.html exists
echo "Verifying index.html exists:"
ls -la index.html

echo "=== BUILD PROCESS COMPLETED ===" 