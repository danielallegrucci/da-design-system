# @da-id/design-system

CSS design system for Daniel Allegrucci portfolio and related projects (Figma: DA-ID-2023).

- **Tokens** — colors, type scale, spacing, radii, shadows on `:root`
- **Light mode** — `[data-theme="light"]` overrides
- **Primitives** — typography utilities, buttons, cards, nav, case study, testimonials, work history

No build step: ship plain CSS.

## Install

### From GitHub (recommended for apps)

```bash
npm install github:danielallegrucci/da-design-system
```

In `package.json`:

```json
{
  "dependencies": {
    "@da-id/design-system": "github:danielallegrucci/da-design-system#main"
  }
}
```

Pin a tag or commit for stability:

```json
"@da-id/design-system": "github:danielallegrucci/da-design-system#v0.1.1"
```

### Local path (monorepo / before publishing)

```json
"@da-id/design-system": "file:../da-design-system"
```

or `file:./packages/design-system` inside this portfolio repo.

### npm registry (optional)

After `npm publish --access public` (or GitHub Packages):

```bash
npm install @da-id/design-system
```

## Usage

### Next.js App Router

`app/layout.js`:

```js
import "@da-id/design-system/css";
import { THEME_INIT_SCRIPT } from "@da-id/design-system/theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
```

Use semantic classes in components (e.g. `className="text-heading container section"`). Toggle theme with `document.documentElement.setAttribute('data-theme', 'light' | remove)`.

### Vite / React

```js
import "@da-id/design-system/css";
```

### Plain HTML

```html
<link rel="stylesheet" href="node_modules/@da-id/design-system/src/index.css" />
```

## Versioning

Bump `package.json` version when tokens or class names change. Consumers pin Git tags or semver ranges.

## Cursor / agents

Copy `cursorrules.md` into each consuming repo.

## Publishing this repo

This folder is the package root. To host on GitHub:

```bash
cd packages/design-system   # or your standalone clone of this directory
git init
git add .
git commit -m "Initial design system package"
gh repo create da-design-system --public --source=. --push
```

Then in apps, switch `file:` dependency to `github:danielallegrucci/da-design-system#main`.

## Preview catalog

A static component catalog lives in **`preview/`** (HTML + `preview.css` layout only).

```bash
npm run preview
```

Open [http://localhost:3456](http://localhost:3456). Toggle light/dark on the page to verify `[data-theme="light"]` overrides.

**Where this should live:** in the **design-system repo** (`da-design-system/preview/`), not in consumer apps. Apps like the portfolio import the package; they do not own the catalog.

Optional hosting:

- **GitHub Pages** — deploy the `preview/` folder (e.g. site root or `/preview` path on `gh-pages`).
- **Portfolio mirror** — a `/design-system` route in Next.js is optional for checking the *installed* version on da-id.com; keep the source of truth in this repo.

## What stays in app repos

- Page-specific React components (`Navbar`, `WorkHistory`, etc.)
- Routes, content, images
- App-level `globals.css` only if you need app-specific overrides (avoid duplicating tokens)
