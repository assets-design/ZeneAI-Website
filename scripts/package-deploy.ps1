# Build and zip Zene AI site for hPanel upload
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$deployDir = Join-Path $root "deploy\zene-ai-website"
$distDir = Join-Path $root "dist"
$zipPath = Join-Path $root "zene-ai-website.zip"

Write-Host "Building site..."
Push-Location $root
npx vite build
if ($LASTEXITCODE -ne 0) { Pop-Location; exit 1 }
Pop-Location

Write-Host "Copying build into deploy folder..."
Get-ChildItem $deployDir -Exclude ".htaccess", "README-HPANEL.txt" | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item -Path "$distDir\*" -Destination $deployDir -Recurse -Force

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
Write-Host ""
Write-Host "Unzip into public_html so index.html is at the root."
