# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based single-page application (SPA) for Stacy's Nails & Spa, a nail salon and spa business in Lynn, MA. The site provides information about services, contact details, and business hours. The application is built with Vite and deployed using GitHub Pages.

## Build & Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### Routing
- Uses **HashRouter** from `react-router-dom` (configured in `src/main.jsx`)
- Hash-based routing is used for GitHub Pages compatibility
- Main routes defined in `src/App.jsx`:
  - `/` - Home page
  - `/about` - About page
  - `/services` - Services page (fetches data from API)
  - `/contact` - Contact page

### Page Structure
Pages follow a directory-based component structure:
- Each page has its own directory under `src/pages/`
- Each page directory contains a `.jsx` component and a `.css` file
- Pages set their own document titles using `useEffect`

### Components
- **Navbar** (`src/components/Navbar/Navbar.jsx`): Responsive navigation with hamburger menu
- **Footer** (`src/components/Footer/Footer.jsx`): Site footer
- **NotificationBanner** (`src/components/NotificationBanner.jsx`): Reusable dismissible banner that uses localStorage to track user interaction

### API Integration
- Backend API base URL is configured in `src/config.js`
- Current API endpoint: `https://www.chandydoss.com/nail-salon/api`
- **Services page** fetches services data from `${API_BASE_URL}/services`
- Services are grouped by category dynamically based on API response
- API response structure: array of service objects with `id`, `name`, `price`, `description`, and `category` fields

### Styling
- Global styles in `src/index.css` and `src/App.css`
- Component-specific CSS files colocated with components
- No CSS preprocessor or CSS-in-JS library used (plain CSS)
- Note: The project has `styled-components` as a dependency but it's not currently used in the codebase

### Analytics
- Google Analytics is integrated (tracking ID: G-01BBHJV5H8)
- Analytics script is loaded in `index.html`
- Page views are tracked on route changes via `useEffect` in `src/App.jsx`

## Deployment

The site is deployed to GitHub Pages using the `gh-pages` npm package:
1. `npm run build` creates production build in `dist/`
2. `npm run deploy` publishes the `dist/` directory to the `gh-pages` branch

The `base` setting in `vite.config.js` is set to `'/'` - adjust this if deploying to a subdirectory.

## Code Style

- ESLint is configured with React-specific rules
- Uses ES2020+ JavaScript features
- JSX files use `.jsx` extension
- React hooks are used throughout (functional components only)
- Custom eslint rule: unused variables starting with uppercase letters are ignored (e.g., `React` imports)
