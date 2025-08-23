#!/bin/bash

echo "==============================================="
echo "WeatherShield Website - GitHub Pages Deployment"
echo "==============================================="
echo ""
echo "DEPLOYMENT STATUS:"
echo ""

# Check workflow status
echo "1. GitHub Actions Workflow:"
gh run list --repo bknddevelopment/WeatherShield-Website --limit 1 2>/dev/null || echo "   Unable to check workflow status"
echo ""

# Check if Pages is enabled
echo "2. GitHub Pages Status:"
gh api repos/bknddevelopment/WeatherShield-Website/pages 2>/dev/null && echo "   ✓ Pages is ENABLED" || echo "   ✗ Pages needs to be ENABLED"
echo ""

echo "==============================================="
echo "NEXT STEPS:"
echo "==============================================="
echo ""
echo "1. Enable GitHub Pages:"
echo "   - Go to: https://github.com/bknddevelopment/WeatherShield-Website/settings/pages"
echo "   - Under 'Source', select 'GitHub Actions'"
echo "   - Click 'Save'"
echo ""
echo "2. Wait for deployment (2-5 minutes)"
echo ""
echo "3. Your site will be available at:"
echo "   https://bknddevelopment.github.io/WeatherShield-Website/"
echo ""
echo "==============================================="