# Zeros Tattoo Style Guide

## Brand Identity

**Name**: Zeros Tattoo  
**Location**: Schärenmoosstrasse 80, 8052 Zürich, Switzerland  
**Tone**: Minimal, creative, modern, friendly, welcoming  
**Visual Style**: Dark, high-contrast, minimal layout with moody photography

## Color Palette

### Primary Colors

```css
--primary: #9333EA        /* Purple - Main accent */
--primary-dark: #7C22CC   /* Dark purple - Hover states */
--secondary: #2A5EEF      /* Blue - Secondary accent */
--accent: #D7263D         /* Red - CTA variants */
--background: #0B0B0F     /* Dark background */
```

### Text Colors

```css
--text-primary: #F7F7F7   /* Main text */
--text-secondary: #AFAFB4 /* Secondary text */
```

### Usage

- **Primary**: Buttons, links, active states, important accents
- **Secondary**: Secondary actions, subtle highlights
- **Accent**: Call-to-action buttons (variations)
- **Background**: Main page background, cards, sections
- **Text Primary**: Headings, body text on dark backgrounds
- **Text Secondary**: Supporting text, metadata

## Typography

### Font Family

**Primary**: Inter  
**Fallback**: system-ui, sans-serif

### Font Weights

- **Light**: 300 (rarely used)
- **Regular**: 400 (body text)
- **Medium**: 500 (buttons, emphasized text)
- **Semibold**: 600 (labels, small headers)
- **Bold**: 700 (headings)
- **Extra Bold**: 800 (hero text)

### Font Sizes

```
Text-4xl: 2.25rem (36px)   /* Extra large headings */
Text-3xl: 1.875rem (30px)  /* Large headings */
Text-2xl: 1.5rem (24px)     /* Medium headings */
Text-xl: 1.25rem (20px)     /* Large body */
Text-lg: 1.125rem (18px)    /* Body emphasis */
Text-base: 1rem (16px)      /* Base body */
Text-sm: 0.875rem (14px)    /* Small text */
Text-xs: 0.75rem (12px)     /* Tiny text */
```

## Spacing System

Based on 0.25rem (4px) base unit:

```
p-1: 0.25rem (4px)
p-2: 0.5rem (8px)
p-3: 0.75rem (12px)
p-4: 1rem (16px)
p-6: 1.5rem (24px)
p-8: 2rem (32px)
p-12: 3rem (48px)
p-16: 4rem (64px)
p-20: 5rem (80px)
```

## Components

### Buttons

#### Primary Button

```jsx
className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all font-semibold"
```

- Background: Primary color
- Hover: Darker shade
- Padding: px-8 py-4 (32px × 16px)
- Border radius: rounded-lg (8px)
- Font weight: semibold

#### Secondary Button

```jsx
className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all font-semibold backdrop-blur-md border border-white/20"
```

- Semi-transparent background
- Backdrop blur effect
- Border for definition

### Cards

```jsx
className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-all border border-white/10"
```

- Background: Semi-transparent
- Hover: Slightly brighter
- Padding: p-8 (2rem)
- Border radius: rounded-lg
- Transition: Smooth color change

### Layout Container

```jsx
className="container mx-auto px-4"
```

- Max width: Responsive container
- Centered: mx-auto
- Horizontal padding: px-4

## Icons

Using **React Icons (Fi)** - Feather Icons for consistency

### Common Icons

- Navigation: `FiMenu`, `FiX`
- Communication: `FiPhone`, `FiMail`, `FiMessageCircle`
- Social: `FiInstagram`
- Actions: `FiArrowRight`, `FiCheck`, `FiFilter`

## Gradients

### Primary Gradient

Used for buttons, accents, backgrounds:

```css
background: linear-gradient(135deg, #9333EA 0%, #7C22CC 50%, #D7263D 100%);
```

### Hero Gradient

Used for hero sections:

```css
background: linear-gradient(180deg, rgba(11, 11, 15, 0.9) 0%, rgba(147, 51, 234, 0.3) 100%);
```

## Effects

### Blur Effects

- Backdrop blur: `backdrop-blur-md`
- Used in: Buttons, overlays, glass morphism effects

### Shadows

- Subtle shadow: `shadow-lg`
- Strong shadow: `shadow-2xl`
- Hover shadow: `hover:shadow-xl`

### Transitions

All interactive elements should have transitions:

```css
transition-all duration-300
```

## Accessibility Guidelines

### Color Contrast

Ensure WCAG AA compliance:
- Text on dark: min 4.5:1
- Text on light: min 4.5:1
- Large text: min 3:1

### Interactive Elements

- Focus states: `focus:outline-2 focus:outline-primary`
- Hover states: Lighter/darker background
- Disabled states: Reduced opacity

### Keyboard Navigation

- All interactive elements keyboard accessible
- Skip links: `skip-to-content` class
- Focus indicators: Visible on all elements

## Responsive Breakpoints

```
sm: 640px   /* Small devices (landscape phones) */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices */
```

### Mobile-First Approach

- Start with mobile styles
- Add md: prefix for tablet+
- Add lg: prefix for desktop+
- Use flex-col on mobile, flex-row on desktop

## Photography Guidelines

### Image Styles

- **Moody**: High contrast, atmospheric
- **Clean**: Minimal backgrounds
- **Diverse**: Various skin tones, styles
- **Professional**: High quality, well-lit

### Aspect Ratios

- Hero: 21:9 (3840×1600)
- Gallery: Square (1:1) or 4:3
- Artist: 3:4 portrait
- Cards: Flexible (16:9 or content-based)

## Logo Usage

### Horizontal Logo

Use for: Header navigation, wide spaces

### Stacked Logo

Use for: Mobile, social media profile

### Monogram

Use for: Favicon, app icon, small spaces

### Icon

Use for: Tab icon, minimal contexts

## Do's and Don'ts

### Do's

✅ Use subtle animations  
✅ Maintain consistent spacing  
✅ Use gradients sparingly and purposefully  
✅ Ensure text readability on dark backgrounds  
✅ Use proper heading hierarchy  
✅ Keep design minimal and clean  
✅ Test on mobile devices  

### Don'ts

❌ Use too many colors simultaneously  
❌ Add unnecessary decorative elements  
❌ Compromise accessibility for aesthetics  
❌ Use low-contrast text  
❌ Clutter the interface  
❌ Overuse animations  
❌ Break responsive layout rules
