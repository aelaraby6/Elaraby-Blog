# 🚀 Elaraby Blog // Space & Software Engineering Logs

> Space exploration aesthetic × personal technical blog by **Elaraby**.  
> Built with **Astro**, **JavaScript**, **Tailwind CSS**, and **MDX**.  
> Pure static site generation (SSG) with zero backend, zero TypeScript source files, and a fixed left navigation sidebar.

---

## 🔍 Features

- **Left Navigation Sidebar:** Desktop fixed sidebar with Elaraby's circular avatar, quick mission search palette (`⌘K`), navigation menu, theme toggle, and drawer on mobile screens.
- **Cosmos & Space Exploration Narrative:** Mission flight logs, telemetry sectors, star charts, and orbit metrics without changing the warm paper / deep navy color palette.
- **Pure JavaScript & MDX:** Writing a new article is as simple as creating a `.mdx` file.
- **Flight Plan TOC & High-Contrast Code Blocks:** Sticky table of contents with scroll spy, GitHub Light / GitHub Dark syntax themes, and copy buttons.
- **Local Static Search:** Fast, zero-database search modal (`⌘K` or `/` shortcut) indexing titles, summaries, categories, and tags.
- **Zero-Flash Theme Toggle:** Supports Light, Dark, and System preference with instant script initialization and `localStorage` persistence.
- **GitHub Pages Ready:** Built-in subpath normalization and automated CI/CD workflow in `.github/workflows/deploy.yml`.
- **SEO & Feeds:** Full Open Graph / Twitter cards, automatic XML sitemap, and RSS 2.0 feed (`/rss.xml`).

---

## 🚀 Quick Start

### 1. Installation

```bash
# Clone repository
git clone https://github.com/username/elaraby-blog.git
cd elaraby-blog

# Install dependencies
npm install
```

### 2. Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Production Build & Preview

```bash
npm run build
npm run preview
```

---

## ✍️ Creating New Articles

Create a `.mdx` file inside `src/content/blog/`:

```mdx
---
title: "Building an AI Service Layer in Express.js with Gemini API"
description: "A complete architectural blueprint for designing a resilient, production-grade AI service layer in Express.js using Google Gemini API."
pubDate: 2026-09-24
category: "Software Engineering"
tags:
  - Express.js
  - Gemini API
  - AI
  - Node.js
  - Software Engineering
caseNumber: "MISSION #001"
featured: true
---

Your technical article content in Markdown or MDX here...
```

---

## ⚖️ License

MIT License. Created by Elaraby.
