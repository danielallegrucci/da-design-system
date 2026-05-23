# @da-id/design-system — agent / Cursor rules

Copy into consuming projects (e.g. `.cursorrules` or `.cursor/rules/design-system.mdc`).

## Design system

- All styles use CSS custom properties from `@da-id/design-system` (`import "@da-id/design-system/css"`).
- Never hardcode color hex, font sizes, spacing, or radii — use `var(--token-name)`.
- Dark mode is default (`:root`). Light mode: `data-theme="light"` on `<html>`.
- Font is Poppins (imported by the package CSS). Do not substitute system fonts.

## Key tokens

- Backgrounds: `--color-bg-primary`, `--color-bg-secondary`, `--color-bg-overlay`
- Text: `--color-text-primary`, `--color-text-body`, `--color-text-accent`, `--color-text-muted`
- CTA: `--color-cta`, `--shadow-cta`
- Teal: `--color-teal-light`, `--color-teal-mid`, `--color-teal-dark`
- Spacing: `--space-1` … `--space-20`
- Radius: `--radius-sm`, `--radius-md`, `--radius-pill`

## Component classes (prefer over new CSS)

- Typography: `.text-hero`, `.text-section-label`, `.text-heading`, `.text-body`, `.text-quote`, `.text-attribution`, `.text-muted`
- Buttons: `.btn`, `.btn-primary-lg`, `.btn-primary`
- Tags: `.tag`
- Cards: `.card`, `.card-work`, `.card.testimonial`, `.testimonial__row`, `.testimonial__icon`
- Nav: `.nav`, `.nav__link`, `.nav__tab`, `.nav__tab--active`
- Layout: `.container`, `.section`, `.tag-row`
- Case study: `.cs-title`, `.cs-pull-quote`, `.cs-body`, `.cs-section-heading`, `.hero-band`, `.cs-header`
- Experience: `.role-header`, `.role-body`, `.testimonials`

When adding primitives, update the package CSS and publish a new version.
