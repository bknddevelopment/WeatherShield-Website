#!/usr/bin/env node

/**
 * Script to fix asset paths for GitHub Pages deployment
 * Replaces absolute paths with the correct basePath
 */

const fs = require('fs');
const path = require('path');

const BASE_PATH = '/WeatherShield-Website';
const OUT_DIR = './out';

// Patterns to replace
const REPLACEMENTS = [
  // Asset paths
  { from: /href="\/_next\//g, to: `href="${BASE_PATH}/_next/` },
  { from: /src="\/_next\//g, to: `src="${BASE_PATH}/_next/` },
  
  // Image paths
  { from: /srcSet="\/_next\//g, to: `srcSet="${BASE_PATH}/_next/` },
  { from: /url=%2F_next%2F/g, to: `url=%2FWeatherShield-Website%2F_next%2F` },
  { from: /url=\/_next\//g, to: `url=${BASE_PATH}/_next/` },
  
  // Public assets
  { from: /href="\/images\//g, to: `href="${BASE_PATH}/images/` },
  { from: /src="\/images\//g, to: `src="${BASE_PATH}/images/` },
  { from: /href="\/videos\//g, to: `href="${BASE_PATH}/videos/` },
  { from: /src="\/videos\//g, to: `src="${BASE_PATH}/videos/` },
  { from: /href="\/favicon/g, to: `href="${BASE_PATH}/favicon` },
  { from: /href="\/manifest/g, to: `href="${BASE_PATH}/manifest` },
  
  // Navigation links (but not external links)
  { from: /href="\/([^\/])/g, to: `href="${BASE_PATH}/$1` },
  
  // srcSet special handling
  { from: /srcSet="([^"]+)"/g, to: (match, content) => {
    const fixed = content.replace(/\/_next\//g, `${BASE_PATH}/_next/`);
    return `srcSet="${fixed}"`;
  }},
  
  // Image URL parameters
  { from: /url=%2Fimages%2F/g, to: `url=%2FWeatherShield-Website%2Fimages%2F` },
  { from: /url=%2Fvideos%2F/g, to: `url=%2FWeatherShield-Website%2Fvideos%2F` },
];

function processFile(filePath) {
  console.log(`Processing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changeCount = 0;
  
  REPLACEMENTS.forEach(replacement => {
    if (typeof replacement.to === 'function') {
      const matches = content.match(replacement.from);
      if (matches) {
        changeCount += matches.length;
        content = content.replace(replacement.from, replacement.to);
      }
    } else {
      const matches = content.match(replacement.from);
      if (matches) {
        changeCount += matches.length;
        content = content.replace(replacement.from, replacement.to);
      }
    }
  });
  
  // Fix double slashes if any
  content = content.replace(/\/WeatherShield-Website\/WeatherShield-Website/g, '/WeatherShield-Website');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✓ Fixed ${changeCount} paths`);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip _next directory - we only need to fix HTML files
      if (file !== '_next') {
        processDirectory(filePath);
      }
    } else if (file.endsWith('.html')) {
      processFile(filePath);
    }
  });
}

// Main execution
console.log('Fixing asset paths for GitHub Pages deployment...');
console.log(`Base path: ${BASE_PATH}`);
console.log(`Output directory: ${OUT_DIR}`);
console.log('');

if (!fs.existsSync(OUT_DIR)) {
  console.error('Error: out directory does not exist. Run build first.');
  process.exit(1);
}

processDirectory(OUT_DIR);

console.log('');
console.log('✅ Asset paths fixed successfully!');