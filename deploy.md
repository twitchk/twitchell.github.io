# Quick Deployment Guide for Namecheap Hosting

## 🚀 Quick Steps to Deploy to me.twitchdl.com

### 1. Build the Site
```bash
npm install
npm run build
```
This creates an `out/` folder with all your website files.

### 2. Set Up Subdomain on Namecheap

1. **Login to Namecheap**
   - Go to your Namecheap account
   - Navigate to Domain List → twitchdl.com

2. **Add DNS Record**
   - Click "Advanced DNS"
   - Add new record:
     - **Type**: A Record
     - **Host**: me
     - **Value**: Your hosting server IP
     - **TTL**: Automatic

### 3. Upload Files

**Option A: cPanel File Manager**
1. Login to your hosting cPanel
2. Open File Manager
3. Go to `public_html/`
4. Create folder named `me`
5. Upload all files from `out/` folder to `me/` folder

**Option B: FTP Upload**
1. Use FileZilla or similar FTP client
2. Connect with your hosting credentials
3. Navigate to `public_html/me/`
4. Upload all files from `out/` folder

### 4. Test Your Site
- Wait 1-24 hours for DNS propagation
- Visit: https://me.twitchdl.com
- Test all links and functionality

## 📁 File Structure After Upload
```
public_html/
└── me/
    ├── index.html
    ├── _next/
    ├── images/
    │   └── profile.jpg
    ├── resume.pdf
    └── [other files from out/ folder]
```

## ⚡ Quick Checklist
- [ ] Built the site (`npm run build`)
- [ ] Created subdomain DNS record
- [ ] Uploaded all files from `out/` folder
- [ ] Replaced profile.jpg with your photo
- [ ] Added your resume.pdf
- [ ] Tested the live site

## 🔧 Common Issues
- **Site not loading**: Check DNS settings and file paths
- **Images missing**: Ensure images are in correct folder
- **404 errors**: Verify all files uploaded correctly

Need help? Contact: twitchellkashty1@gmail.com 