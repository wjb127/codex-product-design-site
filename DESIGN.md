# Codex Product Design Studio Design System

## 1. Atmosphere & Identity

A bright product-command surface for turning vague ideas into reviewable prototypes. The signature is a crisp browser-workbench hero: a calm white canvas, pale sky atmosphere, dense product UI, and glossy nested controls that make the design workflow feel operational rather than decorative.

## 2. Color

### Palette

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| Surface/canvas | --surface-canvas | #f7fbff | Page background and pale atmosphere |
| Surface/primary | --surface-primary | #ffffff | Primary content bands |
| Surface/secondary | --surface-secondary | #f2f6fa | Soft controls and panels |
| Surface/elevated | --surface-elevated | #ffffff | Product frame interiors |
| Surface/ink | --surface-ink | #07090d | Dark CTA and footer surfaces |
| Text/primary | --text-primary | #080b10 | Headlines and primary body |
| Text/secondary | --text-secondary | #536070 | Supporting text |
| Text/tertiary | --text-tertiary | #8a96a6 | Captions and metadata |
| Border/subtle | --border-subtle | rgba(8, 11, 16, 0.07) | Hairline section borders |
| Border/strong | --border-strong | rgba(8, 11, 16, 0.14) | Focused controls and product frame |
| Accent/blue | --accent-blue | #4d8dff | Primary product signal |
| Accent/cyan | --accent-cyan | #63d5ff | Atmospheric highlight |
| Accent/pink | --accent-pink | #ff66ad | Product Design identity accent |
| Accent/green | --accent-green | #3fd995 | Success and QA state |
| Status/warning | --status-warning | #f2a93b | Risk or attention state |

### Rules

- White and pale blue atmosphere carry the page; accents are sparse product signals.
- Product frame UI uses the full neutral ramp before using color.
- No additional raw colors should appear outside this document without adding a token first.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Display | clamp(4.1rem, 6vw, 5.7rem) | 650 | 0.94 | 0 | Hero headline |
| H1 | clamp(2.4rem, 5vw, 5.2rem) | 620 | 0.96 | -0.035em | Major section titles |
| H2 | clamp(1.9rem, 3vw, 3rem) | 620 | 1.06 | -0.025em | Subsection titles |
| H3 | 1.25rem | 620 | 1.2 | -0.01em | Card titles |
| Body/lg | 1.125rem | 430 | 1.7 | 0 | Lead paragraphs |
| Body | 1rem | 430 | 1.65 | 0 | Body text |
| Body/sm | 0.875rem | 460 | 1.5 | 0 | Secondary text |
| Caption | 0.75rem | 620 | 1.35 | 0.08em | Labels and chips |

### Font Stack

- Primary: Geist, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- Mono: "Geist Mono", "SFMono-Regular", Consolas, monospace

### Rules

- Hero display copy uses explicit three-line phrasing: action, object, output.
- Display type is used for the claim and section headlines only.
- Body copy remains readable and product-focused.
- Letter spacing stays zero except declared display/caption usage.

## 4. Spacing & Layout

### Base Unit

All spacing derives from 4px.

| Token | Value | Usage |
|-------|-------|-------|
| --space-1 | 4px | Micro gaps |
| --space-2 | 8px | Inline gaps |
| --space-3 | 12px | Compact control padding |
| --space-4 | 16px | Standard rhythm |
| --space-5 | 20px | Form and card internals |
| --space-6 | 24px | Card padding |
| --space-8 | 32px | Component groups |
| --space-10 | 40px | Section internals |
| --space-12 | 48px | Major group gap |
| --space-16 | 64px | Section rhythm |
| --space-20 | 80px | Hero rhythm |
| --space-24 | 96px | Maximum section spacing |

### Grid

- Max content width: 1180px
- Column system: 12-column desktop, single-column mobile, 24px desktop gutter
- Breakpoints: 640px, 768px, 1024px, 1280px

### Rules

- Sections are full-width bands with constrained inner content.
- Product frame can crop on mobile but must keep primary content legible.
- Cards are not nested inside cards; nested shells are used only for product controls and double-bezel surfaces.

## 5. Components

### Fluid Nav
- Structure: fixed shell, pill inner nav, brand mark, links, CTA, mobile toggle.
- Variants: desktop expanded, mobile compact.
- Spacing: --space-2, --space-3, --space-4.
- States: hover fill shift, active press, focus-visible ring, mobile expanded.
- Accessibility: semantic nav, labeled toggle.
- Motion: transform and opacity only.

### Product Frame
- Structure: outer shell, browser chrome, sidebar rail, main stage, inspector pane.
- Variants: hero, compact workflow card.
- Spacing: --space-3 through --space-8.
- States: active workflow tab updates the stage.
- Accessibility: tabs use buttons with selected state.
- Motion: tab content fades and translates.

### Double-Bezel Card
- Structure: outer tray, inner surface, eyebrow, title, body, metric or CTA.
- Variants: standard, dark, accent.
- Spacing: --space-2, --space-5, --space-6.
- States: hover lift, active press, focus-visible if clickable.
- Accessibility: cards that navigate are anchors or buttons.
- Motion: 700ms cubic-bezier transform.

### Magnetic CTA
- Structure: pill button, label, nested circular arrow glyph.
- Variants: light, dark, glass.
- Spacing: --space-2, --space-3, --space-4.
- States: hover icon translate, active scale, focus-visible ring, disabled muted.
- Accessibility: uses anchors for navigation and buttons for actions.
- Motion: transform and opacity only.

### Evidence Strip
- Structure: horizontal metrics and process checkpoints.
- Variants: light and dark.
- Spacing: --space-4, --space-6.
- States: non-interactive by default.
- Accessibility: concise labels and readable contrast.
- Motion: entry reveal only.

## 6. Motion & Interaction

### Timing

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 140ms | cubic-bezier(0.32, 0.72, 0, 1) | Press and focus |
| Standard | 320ms | cubic-bezier(0.2, 0.8, 0.2, 1) | Tabs and controls |
| Emphasis | 780ms | cubic-bezier(0.16, 1, 0.3, 1) | Hero and section reveal |

### Rules

- Animate only opacity and transform.
- Respect reduced motion.
- Interaction motion must describe state or affordance.

## 7. Depth & Surface

### Strategy

Mixed: soft tonal shifts, hairline borders, and controlled shadows for product frames.

| Level | Value | Usage |
|-------|-------|-------|
| Hairline | 0 0 0 1px var(--border-subtle) | Section and card edges |
| Product | 0 30px 80px rgba(64, 102, 150, 0.18), 0 1px 0 rgba(255,255,255,0.9) inset | Hero frame |
| Lifted | 0 18px 48px rgba(64, 102, 150, 0.14) | Hovered trays |
| Dark glow | 0 26px 80px rgba(77, 141, 255, 0.18) | Dark CTA area |

Surfaces use concentric radii: outer shells are 28px to 36px, inner cores subtract the shell padding.
