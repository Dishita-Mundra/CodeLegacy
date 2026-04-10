#!/bin/bash

# Quick Start Script for Code Legacy Backend (Linux/Mac)

echo "========================================"
echo "Code Legacy - Quick Start"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please download from: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js found"
node --version
echo ""

# Check if MongoDB is running
echo "Checking MongoDB connection..."
node -e "const mongoose = require('mongoose'); mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {console.log('✓ MongoDB is running'); process.exit(0);}).catch(() => {console.log('⚠ MongoDB is not running'); process.exit(0);})"

echo ""
echo "Installing dependencies..."
npm install

echo ""
echo "========================================"
echo "Setup complete!"
echo "========================================"
echo ""
echo "Start the server with:"
echo "  npm start          (For production)"
echo "  npm run dev        (For development with auto-reload)"
echo ""
echo "Then open your browser:"
echo "  http://localhost:5000"
echo ""
echo "========================================"
echo ""
