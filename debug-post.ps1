Write-Host "=== SUPERLITE POST DEBUGGER ===" -ForegroundColor Cyan

# Check for _uploads contamination
$root = $PSScriptRoot
$uploads = Get-ChildItem -Path "$root/src/content/posts" -Directory -Filter "*_uploads*" -ErrorAction SilentlyContinue
if ($uploads) {
    Write-Host "[FAIL] Found _uploads folder!" -ForegroundColor Red
    $uploads | ForEach-Object { Write-Host "  - $($_.FullName)" }
}
else {
    Write-Host "[OK] No _uploads contamination" -ForegroundColor Green
}

# List valid posts
Write-Host "`nValid Posts:" -ForegroundColor Yellow
$posts = Get-ChildItem -Path "$root/src/content/posts" -Directory | Where-Object { $_.Name -notlike "_*" }
if ($posts) {
    $posts | ForEach-Object { Write-Host "  - $($_.Name)" }
}
else {
    Write-Host "  (No posts found)" -ForegroundColor DarkGray
}

# Check for loose files in content root (bad practice)
$looseFiles = Get-ChildItem -Path "$root/src/content/posts" -File
if ($looseFiles) {
    Write-Host "`n[WARN] Loose files found in content root (should be in subfolders):" -ForegroundColor Yellow
    $looseFiles | ForEach-Object { Write-Host "  - $($_.Name)" }
}

Write-Host "`ncheck complete." -ForegroundColor Cyan
