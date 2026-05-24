# 🦖 Rex Velocity

The ultimate energy drink brand for the apex predator. Find your fuel, explore the science, and join the pack.

[![Built with React](https://img.shields.io/badge/Built_with-React-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.2+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)

## 🎯 About

Rex Velocity is a modern e-commerce web application built for an energy drink brand. It showcases a complete customer experience including product browsing, shopping cart functionality, product science information, reviews, and store locations.

## ✨ Features

- 🛒 **E-Commerce Platform** - Browse and purchase products with an interactive shopping cart
- 📊 **Product Science** - Detailed information about the product formula and benefits
- ⭐ **Customer Reviews** - View and explore customer feedback
- 📍 **Store Locator** - Find nearby store locations
- 🔍 **Product Details** - Individual product pages with comprehensive information
- 📱 **Responsive Design** - Optimized for all device sizes
- 🎨 **Modern UI** - Smooth animations and transitions with Motion animations
- 🍪 **Cookie Consent** - GDPR-compliant cookie management
- 📈 **Analytics** - Google Analytics integration for tracking user behavior
- ⚡ **Performance** - Built with Vite for fast development and production builds

## 🏗️ Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite 6.2** - Fast build tool and dev server
- **React Router 7** - Client-side routing
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Motion/Framer Motion** - Smooth animations

### Libraries & Tools
- **Lucide React** - Icon library
- **Google Generative AI (@google/genai)** - AI capabilities
- **React GA4** - Google Analytics integration
- **Vanilla Cookie Consent** - Cookie management
- **Express** - Backend support
- **CLSX/Tailwind Merge** - CSS utility helpers

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Reddevildragg/RexVelocity.git
   cd RexVelocity
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create a .env file in the root directory
   VITE_GA_MEASUREMENT_ID=your_ga_measurement_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

### Available Scripts

```bash
# Development server on port 3000
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Clean build artifacts
npm run clean

# TypeScript type checking
npm run lint
```

## 📁 Project Structure

```
RexVelocity/
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── CookieConsent.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Shop.tsx
│   │   ├── Cart.tsx
│   │   ├── Science.tsx
│   │   ├── Reviews.tsx
│   │   ├── Locations.tsx
│   │   ├── Contact.tsx
│   │   ├── ProductDetail.tsx
│   │   └── PrivacyPolicy.tsx
│   ├── context/          # React context (Cart management)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component with routing
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── package.json          # Dependencies and scripts
└── firebase.json         # Firebase configuration
```

## 🛣️ Routes

- `/` - Home page
- `/shop` - Product shop/catalog
- `/product/:id` - Individual product details
- `/cart` - Shopping cart
- `/formula` - Product science and formula information
- `/reviews` - Customer reviews
- `/locations` - Store locations
- `/contact` - Contact page
- `/privacy` - Privacy policy

## 🎨 Design Features

- **Smooth Animations** - Page transitions and interactive elements use Motion animations
- **Custom Branding** - Tailwind CSS custom theme with `--brand-*` colors
- **Progress Bar** - Visual scroll progress indicator
- **Noise Overlay** - Subtle texture effect for visual depth
- **Responsive Grid** - Adapts beautifully to all screen sizes

## 🔐 Privacy & Compliance

- GDPR-compliant cookie consent banner
- Privacy policy page
- Opt-in analytics tracking
- Cookie preference management

## 📊 Analytics

The project integrates Google Analytics 4 (GA4) for tracking user behavior and engagement. Users must opt-in through the cookie consent banner for analytics to be enabled.

## 🚢 Deployment

The project is configured for Firebase deployment. To deploy:

```bash
# Build the project
npm run build

# Deploy to Firebase (requires Firebase CLI)
firebase deploy
```

## 📝 Configuration Files

- **vite.config.ts** - Vite bundler and dev server settings
- **tsconfig.json** - TypeScript compiler options
- **tailwind.config.ts** - Tailwind CSS theme customization
- **firebase.json** - Firebase hosting configuration
- **metadata.json** - Application metadata

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📄 License

Apache License 2.0 - See individual files for SPDX-License-Identifier declarations

## 🔗 Links

- **Live Site**: [Rex Velocity](https://rexvelocity.web.app)
- **Repository**: [Reddevildragg/RexVelocity](https://github.com/Reddevildragg/RexVelocity)

## 👤 Author

[Reddevildragg](https://github.com/Reddevildragg)

---

**Find your fuel. Explore the science. Join the pack.** 🦖⚡
