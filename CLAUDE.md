# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**portfolio-astro** is a high-performance personal portfolio website built with Astro and TypeScript. The centerpiece is an interactive flipping business card. The site achieves perfect Lighthouse scores (100/100) across all metrics and ships zero JavaScript by default thanks to Astro's island architecture.

**Key Features:**
- Interactive 3D flipping business card (CSS transforms, no JS required)
- Static generation for blazing-fast load times
- Perfect Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
- Fully responsive design
- Integrated sitemap and RSS feeds for projects
- Analytics and performance monitoring with Vercel
- Type-safe with strict TypeScript configuration

---

## Development Commands

### Essential Commands
```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build static site to dist/ folder
npm run preview      # Preview production build locally
npm run check        # Type check the entire project with Astro
npm run format       # Format code with Prettier (including .astro files)
npm run format:check # Check code formatting without modifying
npm run astro        # Run arbitrary Astro CLI commands
```

### Common Development Tasks
```bash
# Development with type checking
npm run dev          # Then in another terminal: npm run check --watch

# Building and testing production
npm run build && npm run preview

# Code formatting before commits
npm run format
npm run format:check
```

---

## Architecture & Code Organization

### Project Structure
```
src/
├── pages/                 # Astro pages and routes
│   ├── index.astro       # Homepage with flipping business card
│   ├── projects/
│   │   ├── index.astro   # Projects listing page
│   │   └── feed.xml.ts   # RSS feed generation
│   └── robots.txt.ts     # robots.txt generation
├── components/
│   └── index/
│       ├── FrontBusinessCard.astro  # Card front side
│       └── BackBusinessCard.astro   # Card back side
│   └── projects/
│       └── ProjectCard.astro        # Project card component
├── layouts/
│   └── Layout.astro      # Base layout with SEO, styles, analytics
├── lib/
│   ├── database.ts       # Centralized data source (name, skills, projects)
│   └── types.ts          # TypeScript type definitions
└── assets/              # Images, SVGs, and static media
```

### Data Architecture Pattern

**The database.ts file is the single source of truth.** All portfolio content (name, contact, skills, projects) flows from `src/lib/database.ts`. This pattern makes it easy to:
- Update content in one place
- Maintain type safety with TypeScript
- Generate multiple views (HTML pages, RSS feeds, sitemaps) from the same data
- Version control content alongside code

```typescript
// src/lib/database.ts - The central data hub
export const db: Database = {
  name: string;
  surname: string;
  profession: string;
  phone: string;
  email: string;
  website: string;
  // ... other fields
  skills: Skill[];
  projects: Project[];
}
```

Components and pages import and use `db` directly to render content.

---

## Key Technologies & Integrations

### Astro & Framework
- **Astro 5.x**: Static site generator with island architecture
- **TypeScript**: Strict mode (`astro/tsconfigs/strict`)
- **CSS**: Global styles in Layout.astro + scoped component styles
- **No JavaScript by default**: All interactive features are CSS-based (except analytics)

### Integrations
- **@astrojs/sitemap**: Generates XML sitemap automatically
- **astro-seo**: SEO metadata management (OG tags, JSON-LD, meta tags)
- **@vercel/analytics**: Client-side analytics tracking
- **@vercel/speed-insights**: Web Vitals monitoring
- **@astrojs/rss**: RSS feed generation for projects
- **sharp**: Image optimization and format conversion

### Output Configuration
```javascript
// astro.config.mjs
output: "static"        // Pure static site generation
site: "https://domain"  // From database.ts
integrations: [sitemap()] // Auto-generate sitemap
```

---

## Interactive Elements & CSS

### The Flipping Business Card
Located in `src/pages/index.astro`, the card uses **CSS 3D transforms**, not JavaScript:

**Key Features:**
- Hidden checkbox input controls card state (`input-checkbox-card`)
- Label wrapping the card acts as toggle trigger
- CSS `transform: rotateY(180deg)` for flip animation
- `backface-visibility: hidden` hides back side when flipped
- Initial spin animation on page load (3-second rotation)
- Responsive design: 600px × 350px on desktop, scales to 90vw on mobile
- Glossy shine effect with pseudo-elements (`::before`, `::after`)

**No JavaScript required for flipping** — pure CSS interaction.

---

## SEO & Performance Optimization

### SEO Architecture
- **JSON-LD Structured Data**: Person schema in Layout.astro with skills, education, work info
- **OpenGraph Tags**: Social sharing preview (og-image.png)
- **Canonical URLs**: Prevents duplicate content issues
- **Meta Tags**: Description, author, viewport
- **Sitemap & RSS**: Automatic generation for discoverability

### Performance Optimization
- **Zero JavaScript by default**: Astro's island architecture ships no JS for static content
- **Image Optimization**: Using Astro's `<Image>` component with sharp
- **Responsive Images**: Multiple sizes and formats generated automatically
- **CSS Scoping**: Prevents style conflicts and reduces unused CSS
- **Static Output**: No server rendering overhead

### Analytics & Monitoring
- Vercel Analytics tracks user interactions and page views
- Vercel Speed Insights monitors Core Web Vitals in production
- Both are initialized in Layout.astro

---

## Content Management

### Adding New Projects
1. Open `src/lib/database.ts`
2. Add a new entry to the `projects` array with name, description, images, stack, host, and github fields
3. Type check with `npm run check`
4. The project automatically appears on the projects page and RSS feed

### Updating Skills
1. Open `src/lib/database.ts`
2. Add/modify entries in the `skills` array with an imported SVG icon and title
3. The skill automatically renders on the front business card

### Updating Contact Info
Update fields in the `db` object in `src/lib/database.ts` (phone, email, website, etc.)

---

## Type Safety

The project uses strict TypeScript configuration. Key types are defined in `src/lib/types.ts`:

```typescript
type Database = {
  name, surname, profession, phone, email, website, fiscalCode,
  resume, letter, certification, skills, projects
};

type Skill = { image: ImageMetadata; title: string };
type Project = { 
  name, description, images, stack, host, github 
};
```

**Astro's `ImageMetadata` type** is used for imported image assets to ensure proper type safety for images.

---

## Build & Deployment

### Building for Production
```bash
npm run build
# Creates dist/ folder with static HTML, CSS, JS
# Automatically generates sitemap.xml and projects/feed.xml
```

### Pre-deployment Checklist
1. Run `npm run format:check` — ensure code is formatted
2. Run `npm run check` — verify TypeScript compiles cleanly
3. Run `npm run build` — confirm build succeeds
4. Test with `npm run preview` — review production output locally

### Deployment
The site deploys as a static site (pure HTML/CSS/JS files). Compatible with:
- Vercel (auto-deploys from GitHub)
- Netlify, GitHub Pages, AWS S3, etc.

---

## Prettier & Code Formatting

This project uses Prettier with the Astro plugin for consistent formatting:
- **Configuration**: `.prettierrc` (bundled in repo)
- **Astro Plugin**: prettier-plugin-astro formats `.astro` files
- **Run before commits**: `npm run format`

---

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes** to pages, components, or database.ts
3. **Type check continuously**: `npm run check` (or add watch flag if available)
4. **Format before committing**: `npm run format`
5. **Build to verify**: `npm run build`
6. **Commit and push** (follows conventional commits)

---

## Performance Considerations

### Lighthouse Targets
The site achieves perfect 100/100 scores. Key practices:
- **Performance**: No render-blocking JavaScript, optimized images
- **Accessibility**: Semantic HTML, ARIA labels (e.g., "Toggle card flip"), proper contrast
- **Best Practices**: HTTPS, no deprecated APIs, responsive design
- **SEO**: Structured data, meta tags, mobile-friendly, fast load times

### Future Optimizations
- Monitor Vercel Speed Insights for Web Vitals
- Keep dependencies updated (especially Astro, sharp)
- Test image formats (WebP, AVIF) for smaller file sizes
- Profile with Chrome DevTools if adding new features

---

## Notes for Future Development

1. **Keep it static**: This site works best as a pure static generator. Avoid adding dynamic routing or API endpoints.
2. **Data-driven**: Always update content through `src/lib/database.ts`, not by hardcoding in templates.
3. **Type safety first**: Leverage strict TypeScript to catch errors early.
4. **CSS over JavaScript**: The flipping card proves sophisticated UX doesn't require JavaScript.
5. **Image optimization**: Use Astro's `<Image>` component with sharp for all images.
6. **SEO matters**: Keep JSON-LD, OG tags, and meta descriptions in sync with actual content.

---

**Last Updated**: April 1, 2026  
**Framework Version**: Astro 5.x  
**Node Version**: 18+  
**Package Manager**: npm or pnpm
