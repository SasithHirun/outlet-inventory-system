# PowerShell script to prepare hosting bundle
$targetDir = Join-Path $PSScriptRoot "deploy_package"
if (Test-Path $targetDir) {
    Remove-Item -Recurse -Force $targetDir
}
New-Item -ItemType Directory -Path $targetDir | Out-Null

Write-Host "Copying production files to deploy_package..."

# 1. Copy .next folder
Copy-Item -Recurse -Path (Join-Path $PSScriptRoot ".next") -Destination (Join-Path $targetDir ".next")

# 2. Copy public folder
Copy-Item -Recurse -Path (Join-Path $PSScriptRoot "public") -Destination (Join-Path $targetDir "public")

# 3. Copy package configs & files
Copy-Item -Path (Join-Path $PSScriptRoot "package.json") -Destination $targetDir
Copy-Item -Path (Join-Path $PSScriptRoot "package-lock.json") -Destination $targetDir
Copy-Item -Path (Join-Path $PSScriptRoot "next.config.ts") -Destination $targetDir
Copy-Item -Path (Join-Path $PSScriptRoot "ecosystem.config.js") -Destination $targetDir
Copy-Item -Path (Join-Path $PSScriptRoot "Dockerfile") -Destination $targetDir
Copy-Item -Path (Join-Path $PSScriptRoot ".env.example") -Destination (Join-Path $targetDir ".env")

Write-Host "Creating deploy_package.zip..."
$zipFile = Join-Path $PSScriptRoot "outlet-inventory-deploy.zip"
if (Test-Path $zipFile) {
    Remove-Item -Force $zipFile
}
Compress-Archive -Path "$targetDir\*" -DestinationPath $zipFile -Force

Write-Host "SUCCESS! Deployment package created at:"
Write-Host $zipFile
