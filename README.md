# TechVersa - Modern Software Company Website

A responsive, modern software company website built with Next.js, Tailwind CSS, Framer Motion, and shadcn/ui.

## 🚀 Features

- **Modern Design**: Dark-first theme with futuristic aesthetics
- **Responsive**: Fully responsive across desktop, tablet, and mobile
- **Animations**: Smooth Framer Motion animations throughout
- **Components**: Built with shadcn/ui components
- **SEO Optimized**: Complete SEO setup with metadata and JSON-LD schema
- **Performance**: Optimized for speed and Core Web Vitals

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## 🎨 Design System

### Color Palette
- `--tv-bg`: #050512 (main background)
- `--tv-panel`: #1f192e (secondary panels/cards)
- `--tv-accent`: #4e466a (accent/hover)
- `--tv-muted`: #9880a3 (muted/highlight text, borders)
- `--tv-glow`: #d3e5e1 (subtle separators, glows)
- `--tv-fore`: #f7fafa (primary text)

### Typography
- **Primary**: Inter (body text)
- **Display**: Poppins (headings)

## 📁 Project Structure

```
tech-versa/
├── app/
│   ├── contact/
│   │   └── page.js          # Contact page
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   └── page.js              # Homepage
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── navigation.js        # Navigation component
│   ├── hero.js              # Hero section
│   ├── services.js          # Services section
│   ├── solutions.js         # Solutions & industries
│   ├── case-studies.js      # Case studies
│   ├── process.js           # Process timeline
│   ├── tech-stack.js        # Tech stack
│   ├── testimonials.js      # Testimonials carousel
│   ├── pricing.js           # Pricing models
│   ├── faq.js               # FAQ section
│   └── footer.js            # Footer
├── lib/
│   └── utils.js             # Utility functions
└── public/
    └── robots.txt           # SEO robots file
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Sections

- **Hero**: Fullscreen hero with animated background and CTAs
- **Services**: 6 service cards with hover animations
- **Solutions**: Industry-specific solutions with tabs
- **Case Studies**: Featured project showcases
- **Process**: 5-step development timeline
- **Tech Stack**: Technology showcase with categories
- **Testimonials**: Client testimonials carousel
- **Pricing**: 3 engagement models
- **FAQ**: Common questions with accordion
- **Contact**: Contact forms and information

## 🎯 Key Features

### Animations
- Staggered entrance animations
- Hover effects and micro-interactions
- Smooth scrolling between sections
- Reduced motion support

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interactions

### SEO & Performance
- Complete metadata setup
- JSON-LD structured data
- Optimized images with next/image
- Sitemap and robots.txt
- Core Web Vitals optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Customization

### Colors
Update the color palette in `tailwind.config.js` and `app/globals.css`

### Content
- Update company information in components
- Replace placeholder content with real data
- Add your own images and assets

### Styling
- Modify Tailwind classes in components
- Add custom CSS in `globals.css`
- Update component variants in shadcn/ui

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, email hello@techversa.com or create an issue in the repository.