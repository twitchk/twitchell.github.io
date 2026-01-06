# Twitchell Addai - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean, light theme design optimized for showcasing professional experience, skills, and projects.

## 🚀 Features

- **Modern Design**: Clean, professional light theme with smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **TypeScript**: Type-safe development with excellent IDE support
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Contact Form**: Functional contact form with mailto integration
- **Smooth Scrolling**: Seamless navigation between sections

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Static export for hosting compatibility

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed on your system
- npm or yarn package manager

### Local Development

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd twitchell-portfolio
   
   # Or extract the downloaded files to your project directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see your portfolio

### Customization

1. **Replace the profile image**
   - Replace `public/images/profile.jpg` with your own photo
   - Recommended size: 400x400px or larger, square aspect ratio

2. **Add your resume**
   - Replace `public/resume.pdf` with your actual resume PDF
   - Keep the filename as `resume.pdf` for the download link to work

3. **Update content**
   - Edit the component files in the `components/` directory to update your information
   - Modify contact details, experience, skills, education, etc.

## 🌐 Deployment to Namecheap Hosting

### Step 1: Build the Static Site

1. **Build the project**
   ```bash
   npm run build
   ```
   This creates an `out/` folder with all static files.

### Step 2: Prepare for Upload

1. **Locate the build files**
   - All files you need are in the `out/` folder
   - This includes HTML, CSS, JS, images, and other assets

### Step 3: Set Up Subdomain on Namecheap

1. **Log into your Namecheap account**
   - Go to Domain List and select your domain (twitchdl.com)

2. **Create subdomain**
   - Go to "Advanced DNS" tab
   - Add a new record:
     - Type: `A Record`
     - Host: `me`
     - Value: Your hosting server's IP address
     - TTL: Automatic

3. **Alternative: CNAME Record**
   - If using shared hosting:
     - Type: `CNAME Record`
     - Host: `me`
     - Value: Your main domain or hosting provider's domain

### Step 4: Upload Files via cPanel/File Manager

1. **Access cPanel**
   - Log into your Namecheap hosting cPanel
   - Open "File Manager"

2. **Navigate to subdomain folder**
   - Go to `public_html/`
   - Create a folder named `me` (for me.twitchdl.com)
   - Enter the `me` folder

3. **Upload files**
   - Select all files from your local `out/` folder
   - Upload them to the `me` folder
   - Extract if uploaded as a zip file

### Step 5: Upload via FTP (Alternative)

1. **FTP Credentials**
   - Get FTP details from your Namecheap hosting panel
   - Host: Usually your domain or ftp.yourdomain.com
   - Username: Your cPanel username
   - Password: Your cPanel password

2. **Upload using FTP client**
   ```bash
   # Using command line FTP or tools like FileZilla
   # Connect to your FTP server
   # Navigate to public_html/me/
   # Upload all files from the 'out' folder
   ```

### Step 6: Configure .htaccess (Optional)

Create a `.htaccess` file in your subdomain folder for better performance:

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>

# Handle client-side routing (if needed)
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Step 7: Test Your Site

1. **Wait for DNS propagation** (can take up to 24 hours)
2. **Visit your site**: `https://me.twitchdl.com`
3. **Test all functionality**:
   - Navigation links
   - Contact form
   - Resume download
   - Mobile responsiveness

## 🔧 Troubleshooting

### Common Issues

1. **Site not loading**
   - Check DNS settings
   - Verify files are in correct directory
   - Check file permissions (755 for folders, 644 for files)

2. **Images not displaying**
   - Ensure images are in `public/images/` folder
   - Check file paths are correct
   - Verify image file extensions match code

3. **Contact form not working**
   - The form uses mailto: links
   - Ensure user has email client configured
   - Consider adding a backend service for form handling

### Performance Optimization

1. **Image optimization**
   - Compress images before uploading
   - Use WebP format when possible
   - Ensure images are appropriately sized

2. **Caching**
   - Use the .htaccess file provided above
   - Enable gzip compression on your server

## 📱 Mobile Optimization

The site is fully responsive and optimized for:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1280px and up)

## 🎨 Customization Guide

### Colors
- Primary colors are defined in `tailwind.config.ts`
- Modify the `primary` color palette to match your brand

### Typography
- Uses Inter font from Google Fonts
- Font weights: 300, 400, 500, 600, 700

### Animations
- Smooth scroll behavior
- Fade-in and slide-up animations
- Hover effects on interactive elements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

If you need help with setup or customization:
1. Check the troubleshooting section above
2. Review the component files for examples
3. Contact: twitchellkashty1@gmail.com

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS** 