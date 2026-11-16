$source = "C:\Users\HP\Documents\antigravity\sharp-galileo\delivery-boy-app"
$dest = "C:\Users\HP\Documents\antigravity\sharp-galileo\delivery-boy-app\github_ready_files"

if (Test-Path $dest) {
    Remove-Item -Recurse -Force $dest
}
New-Item -ItemType Directory -Path $dest | Out-Null

Copy-Item -Recurse -Path "$source\src" -Destination "$dest\src"
Copy-Item -Recurse -Path "$source\public" -Destination "$dest\public"
Copy-Item -Path "$source\package.json" -Destination $dest
Copy-Item -Path "$source\package-lock.json" -Destination $dest
Copy-Item -Path "$source\next.config.ts" -Destination $dest
Copy-Item -Path "$source\tsconfig.json" -Destination $dest
Copy-Item -Path "$source\postcss.config.mjs" -Destination $dest
Copy-Item -Path "$source\eslint.config.mjs" -Destination $dest
Copy-Item -Path "$source\netlify.toml" -Destination $dest
Copy-Item -Path "$source\.gitignore" -Destination $dest
Copy-Item -Path "$source\README.md" -Destination $dest

Write-Host "Prepared github_ready_files successfully!"
