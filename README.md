# Devarsh Portfolio (React + Tailwind)

A modern, blue-and-white portfolio inspired by yichenxie.com, built with React, Vite, Tailwind, and Framer Motion.

## ✨ Features
- Smooth-scrolling, sticky navbar, soft animations
- Sections: Hero, About, Projects, Experience, Skills, Certifications, Contact
- Download Resume button (served from `/public/Devarsh_Kotak_Resume.pdf`)
- Easy to customize content in `src/App.jsx`

## 🚀 Setup
```bash
npm create vite@latest devarsh-portfolio -- --template react
cd devarsh-portfolio
# Replace the generated files with those in this folder (or unzip here)
npm install
npm run dev
```

If you started from scratch, also install and init Tailwind:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 🧭 File Map
- `index.html` – root HTML
- `src/main.jsx` – React entry
- `src/App.jsx` – all sections/content
- `src/index.css` – Tailwind + utility classes
- `tailwind.config.js`, `postcss.config.js`, `vite.config.js`
- `public/Devarsh_Kotak_Resume.pdf` – resume served statically

## 🖼 Customize
- **Brand colors**: `tailwind.config.js` under `theme.extend.colors.brand`
- **Projects/Experience**: edit arrays in `src/App.jsx`
- **Resume**: replace `public/Devarsh_Kotak_Resume.pdf` with your latest file
- **Favicon**: replace `public/favicon.ico`

## 🌐 Deploy
- **Vercel**: Import the repo → Framework: Vite → Build: `npm run build` → Output: `dist`
- **Netlify**: Build: `npm run build` → Publish dir: `dist`
- **GitHub Pages**:
  ```bash
  npm run build
  npm i -D gh-pages
  # add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d dist"
  npm run deploy
  ```

## 🔒 Notes
- No API keys needed. All links (LinkedIn, GitHub, mailto) are static.
- To mirror the exact fonts or assets from other sites, ensure you have rights to use them.
