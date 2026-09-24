# Elaraby Blog

Personal technical blog. A static space for writing engineering notes, architectural patterns, backend designs, and AI integration workflows.

Built with Astro, JavaScript, Tailwind CSS, and MDX.

## Features

- Fixed navigation sidebar with search palette and theme toggle
- Pure JavaScript and MDX (zero TypeScript configuration)
- High-contrast syntax highlighting with copy buttons
- Client-side static search modal (Cmd/Ctrl + K)
- Full static generation (SSG) with automated GitHub Pages deployment
- Automatic RSS feed and XML sitemap generation

## Tech Stack

- Framework: Astro (SSG)
- Language: JavaScript (ESM)
- Styling: Tailwind CSS
- Content: MDX & Astro Content Collections

## Getting Started

### Prerequisites

- Node.js 18.14.1 or higher
- npm

### Installation

```bash
git clone https://github.com/aelaraby6/Elaraby-Blog.git
cd Elaraby-Blog
npm install
```

### Development

```bash
npm run dev
```

The local development server runs at `http://localhost:4321`.

### Production Build

```bash
npm run build
npm run preview
```

Static output is generated in the `dist/` directory.

## Writing Articles

Add a `.mdx` file to `src/content/blog/`:

```mdx
---
title: "Article Title"
description: "Brief summary of the article."
pubDate: 2026-09-24
category: "Software Engineering"
tags:
  - Architecture
  - Node.js
featured: true
---

Your content in Markdown or MDX here...
```

## License

MIT License
