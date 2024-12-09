@echo off
cd /d %~dp0
start cmd /k "cd Front-end && title Terminal - Front-end && npm run dev"
start cmd /k "cd Back-end && title Terminal - Back-end && npm start" /wait
