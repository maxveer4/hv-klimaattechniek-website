# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a single static HTML landing page for HV Klimaattechniek, a Dutch airco (air conditioning) installation/repair/maintenance company. There is no build system, no package manager, and no framework — it's plain HTML with Tailwind CSS loaded via the CDN script tag (`<script src="https://cdn.tailwindcss.com">`) and Google Fonts (Inter).

- `index.html` — the entire site (topbar, nav, hero section with quote-request form, "kies voor kwaliteit" section, mobile menu JS inline at the bottom).
- `assets/images/` — logo and photos referenced by the page.
- `shot_section2_desktop.js` — a one-off Playwright script used to grab a desktop screenshot of the page for review purposes.

All content is in Dutch. Keep new copy in Dutch and consistent in tone with the existing text.

## Running / previewing

There is no dev server or build step. Open `index.html` directly in a browser, or serve the directory with any static file server, e.g.:

```
npx serve .
```

## Taking a screenshot

`shot_section2_desktop.js` uses Playwright (via `npx playwright`, no local install/package.json present) to load `index.html` from the filesystem, scroll to the bottom, and save a screenshot to `shots/section2-desktop.png`. Run it with:

```
node shot_section2_desktop.js
```

Adjust the `page.goto` file path, viewport size, scroll behavior, and output path directly in the script for different sections/breakpoints — it's a throwaway script meant to be edited per screenshot, not a generic tool.

## Styling conventions

- Tailwind utility classes are used directly in markup; there is no `tailwind.config.js` (using the CDN default build), so arbitrary-value classes like `bg-[#3EB3E5]` and `text-[#1a1a1a]` are used for brand colors instead of theme extension.
- Brand accent color: `#3EB3E5` (blue), dark text/background: `#1a1a1a`.
- Font: Inter, loaded from Google Fonts and applied globally in the inline `<style>` block; headings use the `.font-heading` class (currently same font family).
- Mobile nav toggle logic is inline `<script>` at the bottom of `index.html` — keep any new interactive behavior there unless it grows enough to warrant a separate JS file.
