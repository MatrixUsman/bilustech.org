# BilusTech Assets Guide

This folder contains static assets for the BilusTech website. Here's what you need to know about the favicon and OG image files:

## Favicon Files

### favicon.svg
- SVG format favicon (recommended)
- Automatic dark/light mode support
- Already created: `/public/favicon.svg`
- Contains BilusTech branding with electrical, networking, and CCTV symbols

### favicon.ico
- Standard ICO format favicon
- Size: 32x32 pixels minimum
- **TODO**: Generate from favicon.svg using online converter or imagemagick

### apple-touch-icon.png
- Apple/iOS home screen icon
- Size: 180x180 pixels
- **TODO**: Generate with design matching favicon.svg
- Background: Blue (#003d82)
- Border radius: Full rounded corners

## Open Graph Image (og-image.png)

### Required image for social sharing
- Size: 1200x1200 pixels (square) or 1200x630 pixels (recommended)
- Format: PNG
- **TODO**: Create with:
  - BilusTech logo/branding
  - Company name and tagline
  - Professional design
  - Colors: Blue (#003d82) and Orange (#ff6b35)

## Site Manifest

### site.webmanifest
- Already created: `/public/site.webmanifest`
- Enables PWA features
- Defines app metadata for browser and mobile devices
- Includes shortcuts to common pages

## How to Create Missing Assets

### Option 1: Online Tools
- Use favicon.io or realfavicongenerator.net to:
  1. Upload favicon.svg
  2. Generate all required sizes
  3. Download files

### Option 2: Using ImageMagick (CLI)
```bash
# Convert SVG to ICO
convert -density 256x256 -background transparent favicon.svg -define icon:auto-resize=32,16 favicon.ico

# Create Apple Touch Icon
convert -size 180x180 xc:'#003d82' -background '#003d82' -gravity center \
  favicon.svg -composite -extent 180x180 apple-touch-icon.png
```

### Option 3: Design Tools (Figma, Adobe XD)
1. Import favicon.svg
2. Export at appropriate sizes
3. Save as PNG/ICO

## Customization

All icon colors can be customized:
- Primary: #003d82 (Blue)
- Accent: #ff6b35 (Orange)
- Background: #ffffff (White)

For dark mode support, ensure icons have good contrast on both light and dark backgrounds.

## SEO Benefits

These files provide:
- ✅ Better visual branding in browser tabs
- ✅ Social media preview cards
- ✅ Mobile home screen app icons
- ✅ PWA (Progressive Web App) support
- ✅ Improved SEO rankings
- ✅ Better click-through rates from search results
