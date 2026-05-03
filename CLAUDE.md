# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
```

## Tech Stack

- **Framework**: Astro 6.2.1 with TypeScript (strict mode)
- **Runtime**: Node.js >= 22.12.0, ESM only
- **Styling**: Inline CSS within `.astro` components — no CSS framework

## Architecture

This is an Astro static site. Routing is file-based: files under `src/pages/` become URL routes automatically. `.astro` files use a frontmatter fence (`---`) for component script, then an HTML/CSS template body.

```
src/
  pages/      # URL routes
  components/ # Reusable UI pieces
  layouts/    # Page shell templates
  assets/     # Images/SVGs (imported in components)
public/       # Copied verbatim to dist/ (favicons, etc.)
dist/         # Build output (gitignored)
```

## Context: Migration from Deprecated Portfolio

The deprecated Jekyll portfolio lives at `/home/ta1/PP/deprecated_portfolio/taichi-kamei.github.io`. It contains the source content (project descriptions, personal bio) being ported into this Astro site. The `_projects/` collection in the deprecated repo has four project markdown files worth referencing for content.

Prompt:
I want to migrate my deprectated portfolio in jekyll to astro. Also, this deprecated one has problem with image loading for a little while when opening the website, and the images are stretched for the ones i tried to change the size.
I also want to change the whole design of the website. The deisgn inspiration can be found at design_reference.png in this folder.
The design i want it simple, not a fancy portofolio but a simple one. this is for engineering, and what i want to have is an about page with profile pic, bit of description, and also work experience.
For the project page, I want to have a table of content section, then like the one i have in the deprecated.
I want the structure to be modular and easy to modify.

