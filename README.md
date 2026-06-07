# 🏎️ NIT Jamshedpur Drift Racing Team — Official Website

## Overview
A premium, high-performance multi-page website designed for the NIT Jamshedpur Drift Racing Team. This website bridges the gap between a high-tech engineering firm and a professional Formula 1 racing brand, featuring:

- **Scroll Animation Engine**: 224 frame cinematic animation of the racing car that scrubs based on scroll position
- **Ultra-Modern Design**: Dark minimalist aesthetic with burgundy (#4E0110) and metallic gold (#D4AF37) accents
- **Comprehensive Content**: Multi-section layout covering team story, cars, achievements, team members, partners, and sponsorship opportunities
- **Glassmorphism UI**: Modern card-based interface with frosted glass effects
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

---

## Project Structure

```
O DRT/
├── index.html          # Main HTML file with all sections
├── style.css           # Complete styling (responsive, animations, effects)
├── main.js             # Canvas animation, scroll handler, navigation
├── server.js           # Node.js HTTP server serving files and frames
└── README.md           # This file
```

---

## Getting Started

### Installation
1. Ensure you have **Node.js** installed (v14+)
2. Navigate to the project folder: `cd "c:\Users\HP\Desktop\O DRT"`
3. Start the server: `node server.js`

### Access the Website
- **URL**: `http://localhost:3000`
- Server will display: `🏎️ DRIFT Racing — Scroll Experience`

### Stop the Server
- Press `Ctrl+C` in the terminal where the server is running

---

## Key Features

### 1. **Scroll Animation**
- **224 frames** from the image sequence stored in `C:\Users\HP\Downloads\ezgif-new`
- **Frame scrubbing**: As users scroll down the page, the canvas displays frames based on scroll position
- **Preloader**: Shows loading progress (0-100%) before displaying content
- **Smooth interpolation**: Frame updates tied to scroll position for seamless animation

### 2. **Navigation**
- **Sticky header**: Fixed navigation bar that becomes frosted glass on scroll
- **Links**: Home, About, Cars, Achievements, Team, Partners, Support Us
- **Mobile menu**: Hamburger toggle for responsive navigation
- **Smooth scroll**: All anchor links have smooth scroll behavior

### 3. **Hero Section**
- **Cinematic background**: Racing car displayed via canvas animation
- **Overlay content**: "ENGINEERING BEYOND LIMITS" headline with description
- **Call-to-action buttons**: "Explore Website" and "Our Cars"
- **Scroll indicator**: Animation with bounce effect showing "SCROLL"
- **Progress arc**: Visual indicator of animation progress

### 4. **About Section**
- **Two-column layout**: Team story on left, technical philosophy on right
- **Stats bar**: Key metrics (15+ Years Racing, 40+ Engineers, 20+ Podiums, DR-25)
- **Technical Philosophy**: Four core pillars with icons
- **Tags**: Technology highlights (Formula Student, Carbon Fiber, Aerodynamics, EV)

### 5. **Cars Section**
- **Interactive grid**: Cards for DR-24 (Combustion) and DR-25 (Electric)
- **Hover effects**: Specs reveal on hover with smooth transitions
- **Detailed specs**: Chassis, weight, acceleration, engine/motor details
- **Vehicle identifiers**: Badges and model names with color differentiation

### 6. **Achievements**
- **Vertical timeline**: Chronological milestones from 2009-2025
- **Alternating layout**: Left/right positioning for visual interest
- **Timeline dots**: Golden indicators with hover effects
- **Major milestones**: Foundation, first podium, design awards, EV launch

### 7. **Team**
- **Bento grid layout**: Professional showcase of team leads and departments
- **Team captain card**: Prominent display with large avatar and bio
- **Department cards**: Mechanical, Aerodynamics, Electronics, Business
- **Contact info**: VP Technical card for subsystem integration

### 8. **Partners**
- **Three-tier system**: Title Sponsors, Technical Partners, Supporters
- **Logo cloud**: Placeholder cards for partner logos
- **Tier hierarchy**: Size variation reflects sponsorship level

### 9. **Support / Sponsorship**
- **Sponsorship tiers**: Supporter (₹50K), Technical Partner (₹2L), Title Sponsor (₹5L+)
- **Featured tier**: Technical Partner tier highlighted with gold borders
- **Detailed benefits**: List of perks for each sponsorship level
- **CTAs**: Download Prospectus & Become a Partner buttons

### 10. **Footer**
- **Multi-column layout**: Navigation, contact info, newsletter signup
- **Social links**: LinkedIn, Instagram, YouTube, Twitter
- **Contact details**: NIT Jamshedpur address, email, phone
- **Newsletter**: Email subscription for race updates

---

## Design System

### Color Palette
- **Primary Burgundy**: `#4E0110`
- **Secondary Burgundy**: `#6b0117`, `#8a0120`
- **Accent Gold**: `#D4AF37`
- **Light Gold**: `#f0d060`
- **Background Black**: `#05050a`, `#080810`, `#0c0c18`
- **Text**: `#f0ece0` (off-white)
- **Muted**: `#8888a0` (secondary text)

### Typography
- **Headings**: Orbitron (600, 700, 900 weights) — Futuristic, technical
- **Body**: Inter (300, 400, 500, 600 weights) — Clean, readable
- **Font sizes**: Using clamp() for fluid, responsive typography

### Effects & Textures
- **Glassmorphism**: Frosted glass cards with backdrop blur
- **Carbon texture**: Diagonal grid pattern on dark backgrounds
- **Gradients**: Linear and conic gradients for depth
- **Shadows**: Soft, elevated shadow effects on cards
- **Animations**: Fade-in, scale, transform, rotation effects

---

## Technical Details

### Canvas Animation System
**File**: `main.js` (Lines 1-60)

```javascript
// Configuration
TOTAL = 224;        // Total frames
frameSrc = i => `/frames/ezgif-frame-${String(i).padStart(3, '0')}.jpg`

// Key functions:
preload()           // Loads all 224 images, shows progress
drawFrame(idx)      // Renders frame to canvas with proper scaling
tick()              // Scroll event handler, updates frame index
resizeCanvas()      // Responsive canvas sizing
```

**Image Server Path**: Frames are served from `C:\Users\HP\Downloads\ezgif-new`
- **Port**: 3000
- **MIME types**: Supports HTML, CSS, JS, JPG, PNG with proper caching headers

---

## Responsive Breakpoints

### Desktop (1100px+)
- Full 4-column bento grid for team
- Horizontal stat separators
- Side-by-side timeline layout

### Tablet (900px - 1100px)
- 2-column bento grid
- Adjusted footer columns
- Single-line timeline

### Mobile (< 680px)
- 1-column layouts throughout
- Hamburger navigation (hidden desktop nav)
- Vertical stat bar
- Stacked sponsorship tiers
- Adjusted hero font sizes

---

## Browser Compatibility

✅ **Chrome** (latest)
✅ **Firefox** (latest)
✅ **Safari** (latest)
✅ **Edge** (latest)
✅ **Mobile browsers** (iOS Safari, Chrome Mobile)

Requirements:
- Canvas API support
- CSS Grid & Flexbox
- Backdrop filter support (graceful degradation)
- ES6+ JavaScript

---

## Performance Optimizations

1. **Image Preloading**: All 224 frames preloaded with progress indicator
2. **Lazy Rendering**: Canvas only rendered on scroll (requestAnimationFrame)
3. **CSS Optimization**: Minimal repaints, efficient selectors
4. **Responsive Images**: Server-side scaling and caching
5. **Smooth Scrolling**: Passive scroll listeners for better performance
6. **Memory Management**: Intersection observer for fade-in animations

---

## Customization Guide

### Changing Colors
Edit `:root` CSS variables in `style.css`:
```css
:root {
  --burg:   #4E0110;    /* Primary burgundy */
  --gold:   #D4AF37;    /* Accent gold */
  /* ... other variables ... */
}
```

### Updating Team Information
Edit team section in `index.html`:
- **Team Captain**: Update name, role, bio, tags
- **Departments**: Modify department names and member counts

### Adding Partners
Duplicate `.p-logo` divs in the Partners section and update text.

### Updating Stats
Modify values in `.stat-item` divs in the About section.

### Changing Timeline Events
Add/remove `.tl-item` cards in the Achievements section with new dates and content.

---

## Deployment

### For Production

1. **Use a production server**:
   - Apache, Nginx, or Node.js with PM2
   - Let's Encrypt SSL certificate

2. **Environment variables**:
   ```bash
   PORT=80  # or 443 for HTTPS
   FRAMES_DIR=/path/to/frames
   ```

3. **Performance**:
   - Minify CSS and JavaScript
   - Compress images (frames)
   - Enable GZIP compression
   - Use CDN for static assets

4. **Monitoring**:
   - Error tracking (Sentry or similar)
   - Analytics (Google Analytics)
   - Performance monitoring (Web Vitals)

---

## Troubleshooting

### Frames Not Loading
- Check FRAMES_DIR in server.js points to correct path
- Verify all 224 images exist in the directory
- Check console for 404 errors
- Ensure port 3000 is available

### Animation Stuttering
- Reduce browser tabs/extensions
- Clear cache (Ctrl+Shift+Delete)
- Check system RAM usage
- Preload images may take 2-3 seconds on slow connections

### Responsive Issues
- Clear browser cache
- Test in various viewport sizes
- Use Chrome DevTools device emulation
- Check for conflicting CSS

### Navigation Not Working
- Verify anchor IDs match href values
- Check for JavaScript errors in console
- Ensure smooth scroll support (fallback available)

---

## File Size & Performance

| File | Size | Purpose |
|------|------|---------|
| index.html | ~45 KB | Main document |
| style.css | ~32 KB | All styling |
| main.js | ~6 KB | Animation & interactivity |
| server.js | ~1 KB | Server configuration |
| 224 JPGs | ~150 MB | Animation frames |

**Total Page Load**: ~2-3 seconds (depends on connection)
**Frame Load Time**: ~1-2 seconds with indicator

---

## Credits & License

**Built for**: NIT Jamshedpur Drift Racing Team
**Design**: Ultra-modern, professional Formula Student racing aesthetic
**Technology**: HTML5, CSS3, JavaScript (Vanilla), Node.js
**2025**: All rights reserved — NIT Jamshedpur Drift Racing Team

---

## Support & Contact

For issues, improvements, or inquiries:
- **Email**: drift.racing@nitjsr.ac.in
- **Address**: NIT Jamshedpur, Jharkhand — 831014, India

---

**Last Updated**: May 2025
**Version**: 1.0 (Production Ready)
