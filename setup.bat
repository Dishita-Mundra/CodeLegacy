@echo off
REM Quick Start Script for Code Legacy Backend

echo.
echo ========================================
echo Code Legacy - Quick Start
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download and install from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js found
node --version
echo.

REM Check if MongoDB is running
echo Checking MongoDB connection...
node -e "const mongoose = require('mongoose'); mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {console.log('✓ MongoDB is running'); process.exit(0);}).catch(() => {console.log('⚠ MongoDB is not running. Install from: https://www.mongodb.com/try/download/community'); process.exit(0);})"

echo.
echo Installing dependencies...
call npm install

echo.
echo ========================================
echo Setup complete!
echo ========================================
echo.
echo Start the server with:
echo   npm start          (For production)
echo   npm run dev        (For development with auto-reload)
echo.
echo Then open your browser:
echo   http://localhost:5000
echo.
echo ========================================
echo.
pause
