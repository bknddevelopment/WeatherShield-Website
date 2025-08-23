# WeatherShield Website - GitHub Pages Deployment

## Deployment Configuration Complete ✅

The WeatherShield website has been configured for deployment to GitHub Pages. All necessary files and configurations have been added to the repository.

## What Was Done

1. **Next.js Configuration** (`next.config.js`)
   - Added `basePath: '/WeatherShield-Website'` for GitHub Pages URL structure
   - Added `assetPrefix: '/WeatherShield-Website'` for correct asset loading
   - Static export mode already configured with `output: 'export'`

2. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Created automated deployment workflow
   - Triggers on push to main branch
   - Builds Next.js site and deploys to GitHub Pages

3. **Jekyll Bypass** (`public/.nojekyll`)
   - Added `.nojekyll` file to prevent Jekyll processing
   - Ensures Next.js assets load correctly

4. **Bug Fixes**
   - Fixed TypeScript errors in reviews page
   - Installed ESLint dependency

## Required Manual Step: Enable GitHub Pages

**You must enable GitHub Pages in the repository settings:**

1. Go to: https://github.com/bknddevelopment/WeatherShield-Website/settings/pages
2. Under "Source", select **"GitHub Actions"** (not "Deploy from a branch")
3. Click "Save"

## Live Website URL

Once GitHub Pages is enabled and the deployment completes (2-5 minutes), the website will be available at:

### 🌐 https://bknddevelopment.github.io/WeatherShield-Website/

## Checking Deployment Status

### Option 1: GitHub Actions Page
Visit: https://github.com/bknddevelopment/WeatherShield-Website/actions

### Option 2: Command Line
```bash
# Check latest workflow run
gh run list --repo bknddevelopment/WeatherShield-Website --limit 1

# Check if Pages is enabled
gh api repos/bknddevelopment/WeatherShield-Website/pages
```

### Option 3: Use the Check Script
```bash
./check-deployment.sh
```

## Automatic Deployments

After the initial setup, the website will automatically deploy whenever you:
- Push changes to the `main` branch
- Merge a pull request to `main`

Each deployment typically takes 2-5 minutes to complete.

## Troubleshooting

### If the site doesn't appear:
1. Verify GitHub Pages is enabled (Settings > Pages > Source: GitHub Actions)
2. Check the Actions tab for any failed workflows
3. Wait 5-10 minutes for DNS propagation on first deployment
4. Clear browser cache and try again

### If assets/images don't load:
- All paths are automatically prefixed with `/WeatherShield-Website/`
- The configuration in `next.config.js` handles this automatically

### If you see a 404 page:
1. Ensure the workflow completed successfully
2. Check that GitHub Pages is using "GitHub Actions" as the source
3. The site may still be building (wait 2-5 minutes)

## Local Development

To test the production build locally:
```bash
npm run build
npx serve out -l 3000
```

Then visit: http://localhost:3000/WeatherShield-Website/

## Making Changes

1. Make your changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Commit and push to `main`
5. GitHub Actions will automatically deploy

## Support

If you encounter any issues:
1. Check the GitHub Actions logs
2. Verify all configuration files are in place
3. Ensure GitHub Pages is enabled with "GitHub Actions" as the source

---

*Deployment configured on: August 23, 2025*