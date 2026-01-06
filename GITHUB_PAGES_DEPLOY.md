# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio site to GitHub Pages, either at `twitchell.github.io` or with a custom domain.

## Option 1: Deploy to `twitchell.github.io` (User/Organization Site)

### Step 1: Create the Repository

1. **Go to GitHub** and create a new repository
2. **Important**: Name it exactly `twitchell.github.io` (must match your GitHub username)
3. Make it **public** (required for free GitHub Pages)
4. **Don't** initialize with README, .gitignore, or license (if you already have files)

### Step 2: Push Your Code

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio site"

# Add your GitHub repository as remote
git remote add origin https://github.com/twitchell/twitchell.github.io.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

**Important**: You need to go to your **repository's** Settings, NOT your personal account settings!

1. After pushing your code, go to your repository page on GitHub (e.g., `https://github.com/twitchell/twitchell.github.io`)
2. Click the **Settings** tab (at the top of the repository page, next to "Code", "Issues", etc.)
3. In the left sidebar of the repository settings, scroll down and click **Pages**
4. Under **Source**, you'll see options. Select:
   - **Source**: `GitHub Actions` (this will appear after you push the code with the workflow file)
5. The site will automatically deploy when you push to the `main` branch

### Step 4: Access Your Site

- Your site will be live at: `https://twitchell.github.io`
- It may take a few minutes for the first deployment to complete
- Check the **Actions** tab in your repository to see deployment progress

---

## Option 2: Deploy with Custom Domain (e.g., me.twitchdl.com)

### Step 1: Create Repository (Any Name)

1. Create a repository with any name (e.g., `portfolio`, `personal-site`)
2. Push your code as described in Option 1, Step 2

### Step 2: Enable GitHub Pages

**Important**: Go to your **repository's** Settings, NOT your personal account settings!

1. Go to your repository page on GitHub (e.g., `https://github.com/twitchell/portfolio`)
2. Click the **Settings** tab (at the top of the repository page)
3. In the left sidebar, click **Pages**
4. Under **Source**, select `GitHub Actions`
5. Under **Custom domain**, enter your domain (e.g., `me.twitchdl.com`)
6. Check **Enforce HTTPS** (recommended)

### Step 3: Configure DNS

You need to configure DNS records for your domain. Go to your domain registrar (where you bought the domain):

#### For Root Domain (twitchdl.com):
Add these DNS records:
- **Type**: `A`
- **Name**: `@` (or leave blank)
- **Value**: 
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **TTL**: 3600 (or default)

#### For Subdomain (me.twitchdl.com):
Add this DNS record:
- **Type**: `CNAME`
- **Name**: `me`
- **Value**: `twitchell.github.io` (or your username.github.io)
- **TTL**: 3600 (or default)

### Step 4: Add CNAME File

After enabling custom domain in GitHub settings, a `CNAME` file will be automatically created in your repository. If it doesn't appear, you can create it manually:

1. Create a file named `CNAME` in the `public/` folder
2. Add your domain name (e.g., `me.twitchdl.com`)
3. Commit and push:

```bash
echo "me.twitchdl.com" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain CNAME"
git push
```

### Step 5: Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate
- You can check DNS propagation at: https://www.whatsmydns.net
- Once DNS is propagated, GitHub will automatically configure SSL/HTTPS

---

## How It Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. Automatically build your Next.js site when you push to `main`
2. Deploy the built files to GitHub Pages
3. Your site will be live within a few minutes

## Updating Your Site

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update portfolio"
git push
```

The site will automatically rebuild and redeploy.

## Troubleshooting

### Site Not Loading
- Check the **Actions** tab for any build errors
- Verify GitHub Pages is enabled in Settings → Pages
- Wait a few minutes for deployment to complete

### Custom Domain Not Working
- Verify DNS records are correct (use `dig` or online DNS checker)
- Check that CNAME file exists in your repository
- Ensure "Enforce HTTPS" is enabled (may take time for SSL certificate)
- DNS propagation can take up to 48 hours

### Build Errors
- Check the Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Try building locally: `npm run build`

### 404 Errors
- Make sure `trailingSlash: true` is in `next.config.js` (already configured)
- The `.nojekyll` file in `public/` folder ensures GitHub Pages serves all files correctly

## Notes

- **Free GitHub Pages** requires public repositories
- **Custom domains** are free and include SSL/HTTPS
- **Build time**: Usually 2-5 minutes per deployment
- **Bandwidth**: GitHub Pages has generous limits for personal sites

---

**Your site is now ready to deploy!** 🚀

