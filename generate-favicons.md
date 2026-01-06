# Generate Favicons Guide

Your custom favicon with a white "T" on black circular background has been created as `favicon.svg`. To complete the favicon setup, you need to generate PNG versions for better browser compatibility.

## Option 1: Online Converter (Recommended)

1. **Go to an online SVG to PNG converter:**
   - https://convertio.co/svg-png/
   - https://cloudconvert.com/svg-to-png
   - https://www.freeconvert.com/svg-to-png

2. **Upload your `public/favicon.svg` file**

3. **Generate the following sizes:**
   - **16x16 PNG** → Save as `public/favicon-16x16.png`
   - **32x32 PNG** → Save as `public/favicon-32x32.png`
   - **180x180 PNG** → Save as `public/apple-touch-icon.png`

## Option 2: Using Command Line (if you have ImageMagick)

```bash
# Install ImageMagick first, then run:
convert public/favicon.svg -resize 16x16 public/favicon-16x16.png
convert public/favicon.svg -resize 32x32 public/favicon-32x32.png
convert public/favicon.svg -resize 180x180 public/apple-touch-icon.png
```

## Option 3: Using Design Software

If you have Photoshop, GIMP, or similar:
1. Open `public/favicon.svg`
2. Export/Save as PNG with the required dimensions
3. Save with the correct filenames

## Verification

After generating the PNG files:
1. Replace the placeholder files in the `public/` folder
2. Run `npm run build` to rebuild your site
3. Check that the favicon appears in your browser tab

## Current Favicon Design

- **Background**: Black circle
- **Letter**: White "T" 
- **Style**: Clean, professional, matches your brand
- **Format**: SVG (scalable) + PNG fallbacks

The favicon will display your initial "T" for "Twitchell" in a clean, professional style that matches your portfolio's design. 