# Nexora — Digital Marketing Agency

A multi-page marketing website for a fictional digital agency, built with React 19, Vite, Tailwind CSS v4 and Framer Motion.
All client names, case studies, testimonials and statistics are demo content.

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # run oxlint
```

## Pages

| Route       | Page                                              |
| ----------- | ------------------------------------------------- |
| `/`         | Home                                              |
| `/about`    | About, team, values                               |
| `/services` | Service overview and tabbed details (`#seo`, `#social`, `#paid`, `#web`, `#branding`, `#content`) |
| `/work`     | Portfolio with category filter and case-study modal |
| `/contact`  | Enquiry form and FAQ (`?service=<id>` preselects a service) |
| `*`         | 404 page                                          |

Inner pages are code-split with `React.lazy`.

## Project structure

```
src/
  components/
    common/     shared UI (Button, Reveal, PageHero, PageWrapper, Toast, ...)
    forms/      ContactForm, NewsletterForm (react-hook-form)
    layout/     Header, Footer, Layout
    portfolio/  ProjectCard, ProjectModal, PortfolioFilter
    sections/   page sections (Hero, Stats, Process, Testimonials, ...)
    services/   ServiceCard, ServiceTabs
  data/         site config, services, projects, team, testimonials
  hooks/        useCountUp, useScrolled, useToast
  pages/        route components
  utils/        api (demo submit layer), cn, motion presets
  index.css     Tailwind theme tokens and shared component classes
```

Site-wide details (name, email, phone, address, socials, nav links) live in `src/data/site.js`.

## Styling notes

- Theme colours, fonts and animations are defined in the `@theme` block of `src/index.css`.
- Shared text styles are `heading-display`, `heading-1`, `heading-2` and `lead`.
  Don't name custom classes after Tailwind utilities (for example `h-1`): Tailwind generates its own rule for that name and both apply.

## Forms

`src/utils/api.js` simulates network calls; nothing is sent anywhere. Replace `submitEnquiry` and
`subscribeNewsletter` with real `fetch` calls to your backend or CRM. Components only depend on the returned promise.
To demo the error state, submit the contact form with an email ending in `@fail.test`.

## Deployment

The app uses client-side routing (`BrowserRouter`), so the host must serve `index.html` for unknown paths,
otherwise refreshing `/about` returns a 404. For example:

- **Netlify**: add `public/_redirects` containing `/*  /index.html  200`
- **Vercel**: add a `vercel.json` rewrite of `/(.*)` to `/index.html`
- **Apache / Nginx**: fall back to `index.html` (`try_files $uri /index.html;`)
