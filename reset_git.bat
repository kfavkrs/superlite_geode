@echo off
echo WARNING: This will delete your git history and disconnect from the current GitHub repository.
echo You will need to create a NEW empty repository on GitHub after this.
pause

rmdir /s /q .git
git init
git branch -M main
git add .
git commit -m "Initial commit of clean restart"

echo.
echo ========================================================
echo Git history reset.
echo Now go to GitHub, create a BRAND NEW repository.
echo Then run:
echo git remote add origin https://github.com/YOUR_USERNAME/NEW_REPO_NAME.git
echo git push -u origin main
echo ========================================================
pause
