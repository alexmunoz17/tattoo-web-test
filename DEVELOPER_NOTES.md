# Developer Notes - Zeros Tattoo Website

## Quick Start

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Build for production: `npm run build`

## Architecture Overview

### Routing Structure

```
/ → redirects to /de
/de → German pages (default)
  /de
  /de/gallery
  /de/about
  /de/artist
  /de/contact
  /de/faq
  /de/pricing
  /de/legal
/en → English pages
  /en
  /en/gallery
  ...
/es → Spanish pages
  /es
  /es/gallery
  ...
```

### Key Components

#### Header (`src/components/Header.jsx`)
- Sticky navigation with backdrop blur
- Mobile-responsive hamburger menu
- Language selector dropdown
- Logo with gradient Z monogram
- Active state highlighting

#### Footer (`src/components/Footer.jsx`)
- Social media links
- Navigation links
- Contact information
- Address and copyright

#### Hero (`src/components/Hero.jsx`)
- Full-screen hero section
- Gradient overlays
- Dual CTA buttons
- Scroll indicator

#### Pages
All page components follow similar structure:
- Import SEO component for meta tags
- Import translation helper `t()`
- Responsive container layout
- Dark theme styling

### Translation System

Located in `src/utils/i18n.js`:

```javascript
import { t } from '../utils/i18n';

// In component:
<p>{t(lang, 'hero.headline')}</p>
```

Translation keys follow dot-notation:
- `nav.home` - Navigation items
- `hero.headline` - Hero section
- `contact.formFields.name` - Form fields

### Styling System

**Framework**: Tailwind CSS 4.x

**Custom Colors** (defined in `tailwind.config.js`):
```javascript
colors: {
  primary: '#9333EA',      // Purple
  'primary-dark': '#7C22CC',
  secondary: '#2A5EEF',     // Blue
  accent: '#D7263D',        // Red
  'bg-dark': '#0B0B0F',    // Background
  'text-primary': '#F7F7F7',
  'text-secondary': '#AFAFB4',
}
```

**Key Classes**:
- `bg-bg-dark` - Main background
- `text-primary` - Accent text
- `bg-gradient-primary` - Gradient background
- `hover:bg-primary-dark` - Hover states

### Image Assets

**Current Structure**:
```
src/assets/
  images/    # Gallery images, hero, portraits
  svg/       # Logo files
```

**Recommended Sizes**:
- Hero: 3840×1600 (21:9)
- Gallery: 1200×1200 (square)
- Artist: 1200×1600 (3:4 portrait)
- Thumbnails: 800×800

**Format**: WebP with JPEG fallback for compatibility

### Form Handling

**Current**: Placeholder implementation in Contact page
**Future**: Integrate with backend API or form service (Formspree, Netlify Forms, etc.)

Example integration:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
  // Handle response
};
```

### SEO Implementation

**Meta Tags**: Using `react-helmet-async`
```jsx
<SEO 
  title="Page Title"
  description="Description"
  lang={lang}
  path="/page"
/>
```

**Schema Markup**: JSON-LD in `LocalBusinessSchema` component

**Sitemap**: Generated in `public/sitemap.xml`

**robots.txt**: Configured in `public/robots.txt`

### Accessibility Features

✅ Keyboard navigation  
✅ ARIA labels on interactive elements  
✅ Focus states (outline-primary)  
✅ Skip to content link  
✅ Alt text for images  
✅ Semantic HTML  
✅ WCAG AA color contrast  

### Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅

### Performance Optimizations

1. **Code Splitting**: React lazy loading (future)
2. **Image Optimization**: Lazy loading with `loading="lazy"`
3. **Font Loading**: Google Fonts with `display=swap`
4. **Tailwind**: PurgeCSS for production builds
5. **Bundle Size**: Check with `npm run build -- --analyze`

### Development Tips

**Hot Reload**: Vite HMR enabled
**Linting**: ESLint configured
**Formatting**: Recommended Prettier setup

**Debugging**:
- React DevTools
- Network tab for API calls
- Console for errors

### Deployment Checklist

Before deploying:
- [ ] Update contact information (phone, email, Instagram)
- [ ] Replace placeholder images with real photos
- [ ] Update Google Maps embed coordinates
- [ ] Test all forms and interactions
- [ ] Verify all links work
- [ ] Check SEO meta tags per page
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit
- [ ] Verify loading performance
- [ ] Check accessibility score
- [ ] Update sitemap with production URL
- [ ] Configure Cookiebot or other cookie consent
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Configure error tracking (Sentry, etc.)
- [ ] Set up backup solution

### Common Tasks

**Adding a new page**:
1. Create page component in `src/pages/`
2. Add route in `App.jsx`
3. Add navigation link in Header
4. Add translations in `i18n.js`
5. Update sitemap.xml

**Updating translations**:
1. Edit `src/utils/i18n.js`
2. Add new keys following dot-notation
3. Use in component with `t(lang, 'key.path')`

**Styling components**:
- Use Tailwind utility classes
- Add custom styles in `src/index.css`
- Follow design system in `STYLE_GUIDE.md`

### Troubleshooting

**Issue**: Images not loading
- Check paths (use absolute from public/ or import)
- Verify image format (WebP/JPEG/PNG)
- Check console for 404 errors

**Issue**: Translations not updating
- Clear browser cache
- Check localStorage for cached lang
- Verify i18n.js has correct key

**Issue**: Styling not applying
- Verify Tailwind config includes all paths
- Check PostCSS config
- Run `npm run build` to purge unused styles

### Future Enhancements

Potential additions:
- Blog/News section
- Booking calendar integration
- Customer portal
- Online payment
- Newsletter signup
- Instagram feed API
- Advanced gallery with tags
- Multi-artist profiles
- Aftercare guide
- Portfolio downloads

### Notes on Missing Packages

The following are referenced but not yet installed:
- `react-helmet-async`: For SEO meta tags
  Run: `npm install react-helmet-async`

Other dependencies should already be installed via package.json.

### Git Workflow (if using version control)

Recommended branches:
- `main` - Production
- `develop` - Development
- `feature/*` - New features

Commit messages:
- `feat: Add gallery page`
- `fix: Update contact form`
- `style: Improve mobile navigation`
- `docs: Update README`

---

**Last Updated**: Initial build  
**Version**: 1.0.0  
**React**: 19.1.1  
**Tailwind**: 4.1.16
