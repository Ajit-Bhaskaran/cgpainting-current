#!/bin/bash

echo "=== TEST BUILD SCRIPT ==="
echo "Current directory: $(pwd)"
echo "Directory contents:"
ls -la

echo "=== INSTALLING DEPENDENCIES ==="
npm ci --legacy-peer-deps

echo "=== BUILDING APPLICATION ==="
npm run build

echo "=== CHECKING BUILD OUTPUT ==="
echo "Current directory contents:"
ls -la

echo "Out directory contents:"
ls -la out/

echo "=== COPYING FILES ==="
cp -r out/* .

echo "=== FINAL CHECK ==="
echo "Final directory contents:"
ls -la

echo "Checking for index.html:"
ls -la index.html

echo "=== TEST COMPLETE ===" 