@echo off
title Outlet Delivery Boy App
cd /d "%~dp0"
echo ===================================================
echo Starting Outlet Delivery Boy Web App...
echo ===================================================
echo.
echo URL: http://localhost:3000
echo Driver PIN: 1234
echo.
echo Press Ctrl + C to stop the server anytime.
echo ===================================================
echo.
npm run dev
pause
