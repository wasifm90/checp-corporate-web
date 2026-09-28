# CHECP — Corporate Construction & Engineering Website

A premier, production-grade corporate website for **CHECP**—an institutional general contracting and civil engineering firm operating in Saudi Arabia and the GCC region.

Built with modern **Angular 19** (Standalone Components, Signals, strictly-typed Service/Repository abstractions, Tailwind CSS, and Static Prerendering / SSG).

---

## Key Highlights

- **Brand Integrity**: 100% focused on **CHECP**. Zero generic templates, zero placeholder branding.
- **Architectural UI/UX**: Editorial layout inspired by modern high-value construction storytelling, fluid clamp typography (Space Grotesk & Manrope), and refined palette (`#12161F`, `#C8963E`, `#FAF9F5`).
- **Static & Fast (Phase 1)**: All 33 routes and dynamic slugs are statically prerendered (`prerender-routes.txt`) at build time into pure HTML in `dist/checp-corporate-web/browser`. No backend server required for production hosting.
- **Phase 2 Ready**: Every component consumes content exclusively via Angular Services and Signals backed by DI InjectionTokens (`PROJECT_REPOSITORY_TOKEN`, `SERVICES_REPOSITORY_TOKEN`, etc.). To enable the Phase 2 Admin Portal and dynamic backend, simply swap the static repositories for API clients—zero frontend component rewrites required!
- **Accessibility & SEO**: WCAG 2.2 AA compliant, skip link, accessible keyboard navigation, responsive drawer with ESC key trap, dynamic JSON-LD structured data (`Organization`, `WebSite`, `CreativeWork`, `Article`), canonical URLs, `robots.txt`, and XML `sitemap.xml`.
- **Self-Hosted Assets**: All high-resolution photography is stored locally in `public/images/`.

---

## Getting Started

### Prerequisites

- Node.js `v20.x` or higher
- npm `v10.x` or higher

### 1. Installation

```bash
cd checp-corporate-web
npm install
```

### 2. Local Development Server

Run the development server with live reload:

```bash
npm start
# or: npx ng serve
```

Navigate to `http://localhost:4200/`.

### 3. Production Build (SSG Prerendering)

To compile and prerender all 33 static routes:

```bash
npm run build
```

The production output will be generated in:
```
dist/checp-corporate-web/browser/
```

Every route has its own pre-rendered `index.html` file (e.g. `dist/.../projects/financial-district-headquarters/index.html`), making it 100% ready for static edge hosting.

---

## Deployment Guide

The static output in `dist/checp-corporate-web/browser` can be deployed to any static host:

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel deploy --prebuilt` (or configure Build Command: `npm run build`, Output Directory: `dist/checp-corporate-web/browser`).

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist/checp-corporate-web/browser`
3. Optional `_redirects` file for client-side routing fallback:
   ```
   /*    /index.html   200
   ```

### Cloudflare Pages
1. Build command: `npm run build`
2. Output directory: `dist/checp-corporate-web/browser`

### AWS S3 / CloudFront or Nginx
1. Sync `dist/checp-corporate-web/browser` to your S3 bucket or `/var/www/checp.com`.
2. Ensure default root object is `index.html`.

---

## How to Customize & Manage Content (Phase 1)

All content is centralized and strictly typed in `src/app/core/data/`:

| Content Area | File Location | Description |
|---|---|---|
| **Company & Metrics** | `src/app/core/data/company.data.ts` | Tagline, hero copy, 5-stage delivery steps, core values, configurable metrics (`XX+`) |
| **Projects & Case Studies** | `src/app/core/data/projects.data.ts` | Project specifications, scope, approach, outcome, technical specs, galleries |
| **Services (8 Disciplines)** | `src/app/core/data/services.data.ts` | Service descriptions, capabilities, 4-stage execution methodologies |
| **Industries / Sectors** | `src/app/core/data/industries.data.ts` | Sector profiles, technical challenges solved, sector capabilities |
| **Safety & Quality** | `src/app/core/data/safety.data.ts` | HSE metrics, ISO certifications, 4 safety pillars |
| **Insights / Articles** | `src/app/core/data/articles.data.ts` | Thought leadership, engineering whitepapers, technical articles |
| **Careers & Vacancies** | `src/app/core/data/careers.data.ts` | Culture pillars, vacancies array (defaults to professional placeholder) |
| **Regional Offices** | `src/app/core/data/locations.data.ts` | Riyadh HQ, Jeddah Western Office, Dammam Eastern Office coordinates |

### Replacing Images
1. Save your photography into `public/images/` under the appropriate subfolder (`hero/`, `projects/`, `services/`, `industries/`, `safety/`, `insights/`, `careers/`).
2. Update the image path reference in the corresponding data file (e.g. `src/app/core/data/projects.data.ts`).
3. Re-run `npm run build`.

### Updating Contact Form & Inquiries
- Service file: `src/app/core/services/contact.service.ts`
- Currently configured with an asynchronous validation pipeline and a direct `mailto:` fallback.
- In Phase 2 or prior to launch, connect your Formspree endpoint, Resend API key, or custom API in `submitEnquiry()`.

---

## Future Phase 2 Evolution

For full technical documentation on transitioning from Phase 1 static delivery to Phase 2 (Admin Portal, CMS, Database, Authentication, and Media Management), refer to:
👉 `docs/FUTURE_ADMIN_ARCHITECTURE.md`
