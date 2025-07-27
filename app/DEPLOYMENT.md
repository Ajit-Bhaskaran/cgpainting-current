# AWS Amplify Deployment Guide

## What I Fixed

1. **Updated `amplify.yml`**: 
   - Changed to use `npm` instead of `yarn` (since yarn wasn't available)
   - Added `--legacy-peer-deps` flag to handle dependency conflicts
   - Set base directory to `out` for static export
   - Added debug commands to see build output

2. **Updated `next.config.js`**: 
   - Simplified configuration by removing experimental settings
   - Added `output: 'export'` for static generation
   - Set `distDir: 'out'` for proper output location

3. **Added `_redirects` file**: For proper client-side routing

## Current Configuration

### amplify.yml
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - echo "Installing dependencies..."
        - npm ci --legacy-peer-deps
    build:
      commands:
        - echo "Building the application..."
        - npm run build
        - echo "Build completed. Contents of out directory:"
        - ls -la out/
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
```

## Deployment Steps

1. **Commit and push your changes**:
   ```bash
   git add .
   git commit -m "Fix Amplify deployment configuration - use npm and static export"
   git push
   ```

2. **In AWS Amplify Console**:
   - Go to your app
   - Check the build logs for any errors
   - Look for the debug output showing the contents of the `out` directory
   - If the build succeeds, your app should be accessible

## Troubleshooting

If you still get a 404 error:

1. **Check Build Logs**: 
   - Look for any build errors in the Amplify console
   - Check if the `out` directory is being created and populated
   - Look for the debug output showing directory contents

2. **Verify Build Output**: 
   - The build should create an `out` directory with `index.html` and other files
   - Make sure the `_redirects` file is present in the output

3. **Check Domain**: 
   - Ensure you're accessing the correct Amplify domain
   - Try accessing `https://main.d243jluhz5u2nx.amplifyapp.com/index.html` directly

4. **Alternative Approach**:
   If the above doesn't work, try this simpler `amplify.yml`:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci --legacy-peer-deps
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .
       files:
         - '**/*'
   ```

## Common Issues

- **404 Error**: Usually means the build output isn't being served correctly
- **Build Failures**: Check for TypeScript errors or missing dependencies
- **Dependency Conflicts**: The `--legacy-peer-deps` flag should handle this
- **Routing Issues**: The `_redirects` file should handle client-side routing

## Testing Locally

To test the build locally:
```bash
npm install --legacy-peer-deps
npm run build
ls -la out/
```

This should create the `out` directory with all the static files needed for deployment. 