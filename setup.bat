@echo off
REM Deployment script for School Website Unblocker (Windows)
REM This script helps set up and run the proxy application

echo === School Website Unblocker Setup ===
echo This script will help you set up and run the proxy application.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
    echo ✓ Node.js is installed (version: %NODE_VERSION%)
) else (
    echo ✗ Node.js is not installed.
    echo Please install Node.js from https://nodejs.org/ (version 14 or higher)
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
    echo ✓ npm is installed (version: %NPM_VERSION%)
) else (
    echo ✗ npm is not installed.
    echo npm should be included with Node.js. Please reinstall Node.js.
    exit /b 1
)

REM Install dependencies
echo.
echo Installing dependencies...
call npm install

REM Start the server
echo.
echo Starting the proxy server...
echo The server will run on http://localhost:3000
echo Press Ctrl+C to stop the server
echo.
node src/index.js
