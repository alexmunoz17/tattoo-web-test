# Zeros Tattoo Website

Production-ready, responsive, multilingual (de/en/es) website for Zeros Tattoo boutique studio in Zürich.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/        # Reusable components
│   ├── Header.jsx    # Navigation with language switcher
│   ├── Footer.jsx    # Footer with links and social media
│   ├── Hero.jsx      # Hero section component
│   ├── SEO.jsx       # SEO meta tags component
│   ├── WhatsAppButton.jsx
│   └── CookieBanner.jsx
├── pages/            # Page components
│   ├── Home.jsx
│   ├── Gallery.jsx
│   ├── About.jsx
│   ├── Artist.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   ├── Pricing.jsx
│   └── Legal.jsx
├── utils/
│   └── i18n.js       # Translation system
├── assets/
│   └── images/       # Image assets
│   └── svg/          # Logo SVGs
└── index.css         # Tailwind CSS configuration

public/
├── robots.txt
├── sitemap.xml
└── favicon.ico
```

## 🎨 Features

### Implemented

- ✅ Multilingual support (German, English, Spanish)
- ✅ Responsive mobile-first design
- ✅ Dark theme with purple accent gradient
- ✅ Header with sticky navigation
- ✅ Language selector with flags
- ✅ Hero section with gradient effects
- ✅ Gallery with filters and lightbox
- ✅ Artist profile page
- ✅ Contact page with form and Google Maps
- ✅ FAQ with accordion
- ✅ Pricing guide
- ✅ Legal/Impressum page
- ✅ WhatsApp floating button
- ✅ Cookie banner placeholder
- ✅ SEO meta tags
- ✅ sitemap.xml and robots.txt
- ✅ JSON-LD LocalBusiness schema
- ✅ Accessibility features (keyboard navigation, ARIA labels)
- ✅ Logo SVG concepts

### To Add/Replace

- 🔄 AI-generated hero image (currently gradient placeholder)
- 🔄 AI-generated gallery images
- 🔄 Artist portrait photos
- 🔄 Actual contact information (phone, email, Instagram)
- 🔄 Replace placeholder content with final copy
- 🔄 Implement contact form backend
- 🔄 Add Cookiebot integration
- 🔄 Update Google Maps embed with correct location
- 🔄 Add Instagram feed embed
- 🔄 Generate favicon from logo

## 🎨 Design System

### Colors

```css
Primary: #9333EA (purple)
Primary Dark: #7C22CC
Secondary: #2A5EEF (blue)
Accent: #D7263D (red)
Background: #0B0B0F (near-black)
Text Primary: #F7F7F7 (off-white)
Text Secondary: #AFAFB4 (muted grey)
```

### Typography

- **Font**: Inter (imported from Google Fonts)
- **Body**: Inter Regular
- **Headers**: Inter Bold

### Spacing

Based on Tailwind's spacing scale (0.25rem increments).

## 📝 Content Updates

### Updating Translations

Edit `src/utils/i18n.js`:

```javascript
const translations = {
  de: {
    nav: {
      home: 'Home',
      // ... more translations
    }
  },
  en: { /* ... */ },
  es: { /* ... */ }
};
```

### Updating Contact Information

Search for and replace:
- Phone numbers: `+41123456789`
- Email: `hello@zeros-tattoo.ch`
- Instagram: `@zeros_tattoo`
- Address: `Schärenmoosstrasse 80, 8052 Zürich`

### SEO Meta Tags

Each page should use the SEO component:

```jsx
import SEO from '../components/SEO';

<SEO 
  title="Page Title"
  description="Page description"
  lang={lang}
  path="/page-path"
/>
```

## 🖼️ Images

### Placeholder Images

Currently using placeholder URLs. Replace with:

1. **Hero image**: 3840×1600 (cinematic, moody)
2. **Gallery images**: 1200×1200 (diverse styles, skin tones)
3. **Artist portraits**: 1200×1600 (studio lighting)

### Logo Files

Located in `src/assets/svg/`:
- `logo-horizontal.svg` - Horizontal logo
- `logo-stacked.svg` - Vertical/stacked logo
- `logo-monogram.svg` - Z monogram in circle
- `logo-icon.svg` - Icon only

All logos are SVG with gradient fills. Export as PNG for raster needs.

## 🔧 Configuration

### Tailwind CSS

Configuration in `tailwind.config.js`. Custom colors and gradients defined in theme.

### Vite

Minimal configuration in `vite.config.js`. Add plugins as needed.

### PostCSS

Configured in `postcss.config.js` for Tailwind and Autoprefixer.

## 📦 Deployment

### Build

```bash
npm run build
```

Output in `dist/` directory.

### Hosting Options

1. **Netlify**: Connect GitHub repo, build command: `npm run build`, publish directory: `dist`
2. **Vercel**: Same as Netlify
3. **GitHub Pages**: Build and deploy dist folder
4. **Traditional Web Hosting**: Upload dist folder via FTP

### Environment Variables

No environment variables needed for static site. If adding features requiring API keys:

1. Create `.env` file
2. Add variables like `VITE_API_KEY=...`
3. Use in code as `import.meta.env.VITE_API_KEY`

## 🐛 Troubleshooting

### Local Development Issues

- **Port already in use**: Change port in vite.config.js
- **Styles not loading**: Check Tailwind config and imports
- **Images not showing**: Verify paths and public folder

### Build Issues

- **Build fails**: Check for console errors
- **Large bundle size**: Use code splitting
- **Images not optimizing**: Add image optimization plugin

## 📞 Support

For questions about implementation or customization:
- Review code comments
- Check component props
- Refer to React Router and Tailwind documentation

## 📄 License

© 2024 Zeros Tattoo. All rights reserved.

---

**Built with:** React + Vite + Tailwind CSS + React Router