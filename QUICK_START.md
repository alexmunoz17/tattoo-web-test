# Quick Start Guide - Zeros Tattoo Website

## 🎯 First Time Setup

1. **Install dependencies**
   ```bash
   npm install
   ```
   
   If you encounter permission errors:
   ```bash
   sudo chown -R 501:20 "/Users/alex/.npm"
   ```

2. **Install additional package** (if needed)
   ```bash
   npm install react-helmet-async
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Visit** `http://localhost:5173`

---

## 📝 Update These Items First

### 1. Contact Information

Search and replace in all files:
- `+41123456789` → Your actual phone number
- `hello@zeros-tattoo.ch` → Your actual email
- `@zeros_tattoo` → Your actual Instagram handle

### 2. Google Maps Location

File: `src/pages/Contact.jsx`  
Line: ~150 (iframe src)

Replace with your actual Google Maps embed URL.

### 3. Images

**Add to `src/assets/images/`:**
- `hero.jpg` - 3840×1600 (main hero image)
- Gallery images - 1200×1200
- Artist portrait - 1200×1600

Update imports in components to use real images.

### 4. Content

All multilingual content is in:
- `src/utils/i18n.js` - Translation system
- `CONTENT.md` - Full content reference

Update as needed for your brand voice.

---

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#9333EA',  // Change this
  secondary: '#2A5EEF',
  // ...
}
```

### Typography

Edit `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont');
```

Then update Tailwind config `fontFamily`.

---

## 🌐 Language Configuration

Default language is **German**. To change:

Edit `src/App.jsx`:
```javascript
const [lang, setLang] = useState('de'); // Change to 'en' or 'es'
```

Or in URL: `/en` or `/es`

---

## 🚀 Deploy

### Build
```bash
npm run build
```

### Output
Files will be in `dist/` folder

### Hosting Options

**Netlify:**
1. Connect GitHub repo
2. Build: `npm run build`
3. Publish: `dist`

**Vercel:**
Same as Netlify

**Traditional Hosting:**
Upload `dist/` folder via FTP

---

## 📚 Documentation Files

- `README.md` - Full documentation
- `STYLE_GUIDE.md` - Design system
- `CONTENT.md` - All text content
- `DEVELOPER_NOTES.md` - Technical guide
- `PROJECT_SUMMARY.md` - Overview

---

## ⚡ Common Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check for errors
```

---

## 🆘 Troubleshooting

**Port in use?**
- Change in `vite.config.js`

**Styles not loading?**
- Check `tailwind.config.js`
- Verify `src/index.css` imports

**Images not showing?**
- Check file paths
- Use absolute paths or imports

---

## 📱 Preview URLs

- Default (German): `http://localhost:5173/de`
- English: `http://localhost:5173/en`
- Spanish: `http://localhost:5173/es`

---

## ✅ Pre-Launch Checklist

- [ ] Update contact information
- [ ] Replace placeholder images
- [ ] Update Google Maps
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Add analytics
- [ ] Configure cookie consent
- [ ] Test language switching
- [ ] Verify all links

---

**Ready to launch!** 🎉
