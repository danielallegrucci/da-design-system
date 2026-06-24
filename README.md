# @da-id/design-system — archived

**This repository is archived.** The design system now lives inside the portfolio monorepo:

**https://github.com/danielallegrucci/my-portfolio/tree/main/packages/design-system**

## Why

The design system is only consumed by [my-portfolio](https://github.com/danielallegrucci/my-portfolio) (da-id.com). Maintaining a separate package repo added deploy and versioning overhead without benefit for a single-consumer setup.

## If you pinned an old version

Replace GitHub dependency pins with the monorepo path:

```json
"@da-id/design-system": "file:./packages/design-system"
```

Or clone `my-portfolio` and work from `packages/design-system/` directly.

## Historical tags

Tags `v0.1.0`–`v0.1.12` remain on this archived repo for reference. Active development continues in **my-portfolio**.
