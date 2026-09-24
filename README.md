# 📁 Elaraby Blog // Personal Technical Notes

> Japanese detective notebook aesthetic × personal technical blog by **Elaraby**.  
> Built with **Astro**, **JavaScript**, **Tailwind CSS**, and **MDX**.  
> Pure static site generation (SSG) with zero backend, zero TypeScript source files, and a fixed left navigation sidebar.

---

## 🔍 Features

- **Left Navigation Sidebar:** Desktop fixed sidebar with Elaraby's cartoon detective avatar, quick search palette, navigation menu, theme toggle, and drawer on mobile screens.
- **No Footer Clutter:** Clean, distraction-free reading experience without unnecessary footer blocks.
- **Editorial Aesthetic:** Japanese investigation notebook vibes, red Hanko seals (`朱色`), washi grid paper background, and Tokyo midnight palette.
- **Custom Detective Cartoon Avatar:** Stylized cartoon detective portrait of Elaraby (`public/images/elaraby.jpg`).
- **Pure JavaScript & MDX:** No TypeScript source files. Writing a new article is as simple as creating a `.mdx` file.
- **Case Docket TOC & Syntax Highlighting:** Sticky table of contents with scroll spy, Shiki syntax themes (GitHub Light / Tokyo Night), copy buttons, and language headers.
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
title: "Investigating Memory Leaks in V8 Engine"
description: "A forensic analysis of heap snapshots, retained closures, and garbage collection behavior."
pubDate: 2026-10-01
category: "Backend"
tags:
  - Node.js
  - V8
  - Performance
  - Debugging
caseNumber: "CASE #031"
featured: false
---

Your technical article content in Markdown or MDX here...
```

---

## ⚖️ License

MIT License. Created by Elaraby.
