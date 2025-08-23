#!/bin/bash

# Build script for GitHub Pages deployment
# This ensures proper static export for Next.js 14

set -e

echo "Building for GitHub Pages..."

# Set production environment
export NODE_ENV=production

# Clean previous builds
rm -rf out .next

# Build the application
npm run build

# Create output directory
mkdir -p out

# Copy HTML files from server output
echo "Copying HTML files..."
cp -r .next/server/app/* out/ 2>/dev/null || true

# Create _next directory for static assets
mkdir -p out/_next

# Copy all static files
echo "Copying static assets..."
if [ -d ".next/static" ]; then
  cp -r .next/static out/_next/
fi

# Copy public files to root
echo "Copying public files..."
if [ -d "public" ]; then
  cp -r public/* out/ 2>/dev/null || true
fi

# Create .nojekyll file (required for GitHub Pages to serve _next directory)
touch out/.nojekyll

# Verify the build
echo ""
echo "Build complete! Verifying output structure..."
echo ""
echo "HTML files in out/:"
find out -name "*.html" -type f | head -10

echo ""
echo "Static assets in out/_next/:"
ls -la out/_next/static/ 2>/dev/null || echo "No static directory found"

echo ""
echo "Build successful! The 'out' directory is ready for deployment."