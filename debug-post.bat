@echo off
REM Superlite Post Debug Checker - Batch Launcher
REM Double-click this file or run from command line

cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File "%~dp0debug-post.ps1"
pause
