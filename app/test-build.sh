#!/bin/bash

echo "=== TEST BUILD SCRIPT ==="
echo "Cleaning previous build..."
rm -rf out .next

echo "Building the project..."
npm run build

echo "Checking if out folder was created..."
if [ -d "out" ]; then
    echo "✅ out folder exists"
    
    echo "Checking for images in out folder..."
    if [ -f "out/commercial-scaffolding.jpg" ]; then
        echo "✅ commercial-scaffolding.jpg found in out folder"
    else
        echo "❌ commercial-scaffolding.jpg NOT found in out folder"
    fi
    
    if [ -f "out/hero-background.jpg" ]; then
        echo "✅ hero-background.jpg found in out folder"
    else
        echo "❌ hero-background.jpg NOT found in out folder"
    fi
    
    if [ -f "out/logo.png" ]; then
        echo "✅ logo.png found in out folder"
    else
        echo "❌ logo.png NOT found in out folder"
    fi
    
    echo "Listing all files in out folder:"
    ls -la out/
    
else
    echo "❌ out folder was not created"
fi

echo "=== TEST BUILD COMPLETE ===" 