# JamPort Website

A modern, responsive landing page for JamPort - the ultimate platform for music producers to sell beats and promote events.

## Features

- **Hero Section**: Compelling headline with email signup for early access
- **Features Section**: Explains the beats + tickets concept with 6 key features
- **App Preview**: Interactive mockup showing the mobile app interface
- **How It Works**: 4-step process explanation
- **Footer**: Complete with links, social media, and newsletter signup

## Tech Stack

- **Pure HTML/CSS/JavaScript** - No build process needed
- **Tailwind CSS** via CDN for styling
- **Responsive Design** for all devices
- **TypeScript Components** (optional, for future development)

## Getting Started

**Option 1: Use the HTML version (Recommended)**
1. Open `index.html` in your browser
2. That's it! No installation needed

**Option 2: Use the React components (Advanced)**
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
└── components/
    ├── HeroSection.tsx      # Landing hero with CTA
    ├── FeaturesSection.tsx  # 6 key features
    ├── AppPreviewSection.tsx # Interactive app mockup
    ├── HowItWorksSection.tsx # 4-step process
    └── Footer.tsx           # Complete footer
```

## Design Features

- **Music-inspired gradient** color scheme (purple, pink, blue)
- **Glassmorphism effects** with backdrop blur
- **Smooth animations** and hover effects
- **Mobile-first responsive** design
- **Accessibility** considerations

## Customization

The website is designed to be easily customizable:

- Update colors in `tailwind.config.ts`
- Modify content in component files
- Add new sections by creating components
- Update metadata in `layout.tsx`

## Future Enhancements

- Connect to Firebase for email collection
- Add analytics tracking
- Implement contact forms
- Add blog/news section
- Integrate with mobile app backend