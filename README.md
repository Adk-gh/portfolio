# Aderik "Adi" Bermas — Professional Portfolio

A polished, minimalist professional portfolio built with **React + Vite**. 

## 🚀 Quick Start

### Development
To run the project locally:
```bash
npm install
npm run dev
```

### Production Build
To create a production-ready bundle:
```bash
npm run build
```
The output will be in the `dist/` folder.

## 📁 Project Structure

- `src/data/projects.js`: The single source of truth for all project content.
- `src/components/`: Reusable UI elements (Buttons, Layout, etc.).
- `src/sections/`: Main page content sections.
- `src/styles/`: Design tokens and global CSS.
- `public/`: Static assets (like your résumé PDF).

## 🛠️ Adding a New Project

The portfolio is designed to be expandable without changing the UI code. To add a new project:

1. **Prepare Assets**: Add screenshots to `src/assets/projects/<project-slug>/`.
2. **Update Data**: Open `src/data/projects.js` and add a new object to the `projects` array.
3. **Fill Details**: Provide the title, short description, technologies used, and a detailed `caseStudy` object.
4. **Verify**: Run `npm run dev` to ensure the new card and case study render correctly.

## 🌐 Deployment Guide

### Option 1: Vercel (Recommended)
1. Push this code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com) and click **"Add New"** $\rightarrow$ **"Project"**.
3. Import your repository.
4. Vercel will automatically detect **Vite**. Use the default settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

### Option 2: Render
1. Create a new **Static Site** on [Render](https://render.com).
2. Connect your GitHub repository.
3. Set **Build Command** to `npm run build` and **Publish Directory** to `dist`.

## 🎨 Design System
- **Background:** Warm Cream (`#F4F1E9`)
- **Accent:** Deep Forest Green (`#234B3B`)
- **Typography:** System Sans-Serif for professional clarity.
- **Constraints:** No gradients or excessive animations.
