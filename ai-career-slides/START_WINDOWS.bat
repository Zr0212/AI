@echo off
cd /d "%~dp0"
echo Starting offline classroom slideshow on http://localhost:8765
start "AI Slides Local Server" cmd /k "py -3 -m http.server 8765"
timeout /t 2 >nul
start "" "http://localhost:8765/index.html"
