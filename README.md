# Ms. Vila — Tuition Website

A simple, single-page static site (plain HTML/CSS/JS — no build step) for Ms. Vila's Primary Maths & Science tuition, ready to host on GitHub Pages.

## Files

- `index.html` — all page content and structure
- `styles.css` — all styling
- `script.js` — mobile menu toggle + footer year
- `images/logo.png` — your logo (background removed, cropped tight), used only in the About section
- `favicon.ico`, `images/favicon-96.png`, `images/apple-touch-icon.png` — browser-tab and home-screen icons made from the logo (the small ones show just the V, without the ring)
- `images/hero.jpg` — your photo, used in the hero banner

## Before you publish — placeholder content to review

This first draft uses placeholder copy so you have something concrete to react to. Search `index.html` for the word `PLACEHOLDER` (in HTML comments) to find every spot, specifically:

1. **Testimonials** (4 of them) — replace with real quotes and names/initials from actual parents, with their permission.
2. **About section image** — currently your logo, larger and inside a smaller card as requested. You can leave it as-is, or swap in a real photo of Ms. Vila later by replacing the `<img class="portrait-logo" ...>` line inside `<div class="portrait-frame">` with `<img src="images/vila.jpg" alt="Ms. Vila">`.
3. **WhatsApp number** — currently set to `+65 9628 2109` in three places (nav button, hero button, contact section, and the floating button) as the link `https://wa.me/6596282109`. Double-check this is the number you want published.
4. **Bio text** in the About section — written generically from what you've shared; feel free to rewrite in Vila's own voice.

## How to deploy on GitHub Pages

1. **Create a GitHub account** at [github.com](https://github.com) if you don't have one already.
2. **Create a new repository**:
   - Click the "+" icon (top right) → "New repository"
   - Name it anything, e.g. `vila-tuition` (this name will appear in the free URL, e.g. `yourusername.github.io/vila-tuition`)
   - Set it to **Public** (required for free GitHub Pages)
   - Don't add a README/gitignore (we already have files)
3. **Upload these files**:
   - On the new repo's page, click "uploading an existing file"
   - Drag in `index.html`, `styles.css`, `script.js`, `README.md`, and the `images/` folder
   - Commit the files
4. **Turn on GitHub Pages**:
   - Go to the repo's **Settings** tab → **Pages** (left sidebar)
   - Under "Build and deployment" → Source, choose **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)` → Save
   - GitHub will give you a live URL after a minute or two, e.g. `https://yourusername.github.io/vila-tuition/`
5. **Custom domain (later)**: once you're ready, the same Settings → Pages screen has a "Custom domain" field — just point your domain's DNS at GitHub as their docs describe, and GitHub Pages will serve the site from it automatically.

## Making future edits

Any time you want to change text, images or colors, edit `index.html` / `styles.css` directly (in GitHub's web editor, or by cloning the repo locally) and commit — GitHub Pages redeploys automatically within a minute or two of every push to `main`.
