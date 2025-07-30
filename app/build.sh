#!/bin/bash
set -e

echo "Starting build process..."

# Install dependencies
echo "Installing dependencies..."
npm ci --legacy-peer-deps

# Build the application
echo "Building application..."
npm run build

# Verify build output
echo "Verifying build output..."
ls -la out/

echo "Build completed successfully!" 