# Build and zip Zene AI site for hPanel upload (includes iOS Safari fixes)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$deployDir = Join-Path $root "deploy\zene-ai-website"
$distDir = Join-Path $root "dist"
$zipPath = Join-Path $root "zene-ai-website.zip"
$readmePath = Join-Path $deployDir "README-HPANEL.txt"
$builtAt = Get-Date -Format "yyyy-MM-dd HH:mm"

Write-Host "Building production site (vite)..."
Push-Location $root
npx vite build
if ($LASTEXITCODE -ne 0) { Pop-Location; exit 1 }
Pop-Location

if (-not (Test-Path (Join-Path $distDir "index.html"))) {
  Write-Error "Build failed: dist\index.html not found"
}

if (-not (Test-Path (Join-Path $distDir "assets\data\india-cities.json"))) {
  Write-Error "Build failed: dist\assets\data\india-cities.json not found (required for contact form, keeps main JS small on iOS)"
}

$jsFiles = Get-ChildItem (Join-Path $distDir "assets") -Filter "*.js" -File
$largestJs = ($jsFiles | Sort-Object Length -Descending | Select-Object -First 1)
$largestJsMb = [math]::Round($largestJs.Length / 1MB, 2)
Write-Host "Largest JS chunk: $($largestJs.Name) (${largestJsMb} MB)"

if ($largestJsMb -gt 3) {
  Write-Warning "Main JS chunk is still over 3 MB. iOS Safari may show a blank screen until this is reduced."
}

$cssFile = Get-ChildItem (Join-Path $distDir "assets") -Filter "*.css" -File | Select-Object -First 1
if ($cssFile) {
  $cssText = Get-Content $cssFile.FullName -Raw
  if ($cssText -notmatch 'ios-touch') {
    Write-Warning 'Built CSS may be missing html.ios-touch rules - verify iOS fixes before upload.'
  }
}

Write-Host "Copying build into deploy folder..."
Get-ChildItem $deployDir -Exclude ".htaccess", "README-HPANEL.txt" | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item -Path "$distDir\*" -Destination $deployDir -Recurse -Force

# Stamp README with build time (template lines preserved)
if (Test-Path $readmePath) {
  $readme = Get-Content $readmePath -Raw
  $readme = $readme -replace '(?m)^Built:.*$', "Built: $builtAt (production static export, Vite)"
  if ($readme -notmatch '(?m)^Built:') {
    $readme += "`nBuilt: $builtAt (production static export, Vite)`n"
  }
  Set-Content -Path $readmePath -Value $readme.TrimEnd() -NoNewline
  Add-Content -Path $readmePath -Value "`n"
}

Write-Host "Creating zip..."
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zip = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)

function Add-ToZip($sourcePath, $entryName) {
  if (Test-Path $sourcePath) {
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $sourcePath, $entryName) | Out-Null
  }
}

Get-ChildItem $deployDir -Recurse -File | ForEach-Object {
  $relative = $_.FullName.Substring($deployDir.Length + 1).Replace("\", "/")
  Add-ToZip $_.FullName $relative
}

$zip.Dispose()

$sizeMb = [math]::Round((Get-Item $zipPath).Length / 1MB, 1)
Write-Host ""
Write-Host "Done! Upload this file to hPanel:"
Write-Host "  $zipPath"
Write-Host "  Size: ${sizeMb} MB"
Write-Host "  Built: $builtAt"
Write-Host "  Largest JS chunk: ${largestJsMb} MB"
Write-Host ""
Write-Host "Includes iOS Safari fixes:"
Write-Host "  - Smaller main JS bundle (India cities loaded from JSON on /contact only)"
Write-Host "  - html.ios-touch layout + reveal fallbacks"
Write-Host "  - Route-based code splitting"
Write-Host "Unzip into public_html so index.html is at the root."
