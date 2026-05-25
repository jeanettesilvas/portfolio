Personal portfolio built with Next.js, TypeScript, and Tailwind.

## Setup

```bash
git clone https://github.com/jeanettesilvas/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/          # Pages (App Router) — work, about, resume, contact
  components/   # Shared UI — Nav, Footer, print button, case study pieces
public/         # Static assets
```

## Design Decisions

**Fonts**
- [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) — headings (`--font-heading`)
- [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) — body / UI (`--font-sans`)

**Design system**
- [shadcn/ui](https://ui.shadcn.com) with preset `b5YiY7cRhp`, using [Base UI](https://base-ui.com) instead of Radix primitives

## What's in Progress

- **Work card images** — `/work` grid cards use hatched placeholders; need real project screenshots
- **Homepage project cards** — same hatched placeholders, same need
- **Bulk Upload case study** — Problem section copy and screenshot, Figma ⇔ Code assets, and the Constraints / Explorations / Decisions / Retrospective sections are all placeholder
- **Image Manager case study** — page doesn't exist yet
- **Resume PDF** — print button is wired up but there's no PDF to download yet
