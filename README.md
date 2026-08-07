# React Website Setup (Vite + React 18)

A modern, high-performance React starter template for building websites.

## 🚀 Features

- **⚡ Fast Development**: Powered by Vite with instant HMR.
- **🎨 Glassmorphism & Modern Styling**: Custom dark mode CSS design tokens with glowing cards, smooth transitions, and responsive layout.
- **🧩 Component Architecture**: Clean separation of Header, Hero, Features, Interactive Demo, and Footer.
- **📦 Lucide Icons**: Modern icon library integrated (`lucide-react`).
- **🔍 SEO Ready**: Includes title tags, viewport metadata, semantic HTML5 structure, and Google Fonts (Outfit & Plus Jakarta Sans).

## 📁 Project Structure

```
g3/
├── index.html              # Entry HTML file with SEO & Font setup
├── package.json            # Project metadata & dependencies
├── vite.config.js          # Vite configuration
├── public/
│   └── favicon.svg         # React logo SVG favicon
└── src/
    ├── main.jsx            # React root DOM rendering
    ├── App.jsx             # Main application layout
    ├── index.css           # Global CSS design system
    └── components/         # Modular UI Components
        ├── Header.jsx      # Navigation bar
        ├── Hero.jsx        # Landing hero section
        ├── Features.jsx    # Feature cards grid
        ├── InteractiveDemo.jsx # State management demo
        └── Footer.jsx      # Site footer
```

## 🛠️ Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```
