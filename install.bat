@echo off
cd /d %~dp0
start cmd /k "cd %~dp0 && cd Front-end && title Terminal - %~dp0\Front-end && npm i && cd /d %~dp0 && cd Back-end && title Terminal - %~dp0\Back-end && npm i"