# Ezra Stjärna-Shively Portfolio

[![Deploy to GitHub Pages](https://github.com/chromaglow/superlite/actions/workflows/deploy.yml/badge.svg)](https://github.com/chromaglow/superlite/actions/workflows/deploy.yml)

> A minimal, modern portfolio website for process engineering and product design work.

Built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and TypeScript. Based on [Tim Witzdam's Minimal Portfolio Template](https://github.com/TimWitzdam/astro-minimal-portfolio-template).

## Features

- **Single Config Architecture** - All content managed through `src/config.ts`
- **Markdown Blog** - Drop `.md` files in `src/content/posts/` and they auto-appear
- **Project Gallery** - Showcase work with images and descriptions
- **Apple-Inspired Design** - Minimal, clean, lots of white space
- **Lightning Fast** - Static site generation for optimal performance
- **Mobile Responsive** - Looks great on all devices
- **SEO Optimized** - Perfect Lighthouse scores

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Development server runs at `http://localhost:4321`

## Project Structure

```
superlite/
├── src/
│   ├── config.ts        # All site content
│   ├── content/posts/   # Blog posts (Markdown)
│   ├── components/      # UI components
│   ├── layouts/         # Page templates
│   └── pages/           # Routes
├── public/              # Static assets (images)
└── docs/                # Documentation
```

## Configuration

Edit `src/config.ts` to customize:

- **Identity** - Name, email, logo
- **Navigation** - Menu links
- **Social Links** - GitHub, LinkedIn, etc.
- **Home Page** - Role, description, CTAs
- **About Page** - Bio, work experience
- **Projects** - Portfolio items
- **Blog** - Metadata

## Documentation

| Document | Description |
|----------|-------------|
| [INDEX.md](INDEX.md) | Documentation overview |
| [SETUP.md](SETUP.md) | Detailed setup guide |
| [DEVELOPMENT.md](DEVELOPMENT.md) | Change log |
| [CHECKLIST.md](CHECKLIST.md) | Task tracking |
| [QUICKREF.md](QUICKREF.md) | Common commands |
| [TOOL_PLANNING.md](TOOL_PLANNING.md) | Future desktop tool |

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Adding Content

### Blog Post

Create `src/content/posts/my-post.md`:

```markdown
---
title: "My Post"
pubDate: 2026-02-02
description: "Post description"
tags: ["tag1", "tag2"]
---

Content here...
```

### Project

Edit `src/config.ts`, add to `projects` array:

```typescript
{
  title: "Project Name",
  description: "What it does",
  image: "/projects/image.jpg",
  year: "2026",
  url: "https://link.com"
}
```

## Future Plans

Phase 2 will add a desktop application for:
- GUI-based content management
- AI-powered SEO descriptions (Claude API)
- Automatic image optimization
- One-click publishing

See [TOOL_PLANNING.md](TOOL_PLANNING.md) for details.

## Credits

- Template: [Tim Witzdam](https://github.com/TimWitzdam/astro-minimal-portfolio-template)
- Framework: [Astro](https://astro.build/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)

## License

MIT
