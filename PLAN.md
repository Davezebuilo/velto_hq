# Velto landing page — execution plan

Source: Figma file `S4n0zPlASsfLLxqALGRhW8`, page **Landing 🌅** (`306:969`). Values below were read directly from the file.

| Frame | Node | Size |
|---|---|---|
| Landing page (desktop) | `509:736` | 1512 × 8270 |
| Landing page mobile | `353:1590` | 430 × 7749 |
| Mobile menu | `359:2366` | 430 × 932 |

## Stack
- Vite + React + TypeScript + Tailwind CSS, static build (Vercel/Netlify)
- Fonts: **Montserrat** (Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800) via Google Fonts. Inter only appears inside the phone mockups, which ship as images.
- Icons: Iconify (designer used `stash:telegram-duotone`, `prime:twitter`, `mdi:linkedin`, `simple-icons:farcaster`, `mingcute:close-fill`)
- No backend. All CTAs → Telegram bot (`https://t.me/Veltohq_bot`, to confirm)

## Design tokens
No Figma styles/variables exist, so these are extracted from raw fills.

**Colors**
| Token | Value |
|---|---|
| `bg` | `#000000` |
| `text` | `#FFFFFF`, headings sometimes `#EFEFEF` |
| `text-muted` | `white/60` |
| `surface` | `white/5` fill, `white/10` 1px border, backdrop-blur 40, radius 40 (payment, CTA cards) |
| `surface-faq` | `white/3` fill, `white/20` border, blur 10, radius 20 (mobile 15) |
| `step-card` | `white/15` fill, `white/50` 0.7px border, blur 28, glow `0 0 64 white/10`, radius 21 |
| `brand-pink` | `#F00BE9` |
| `brand-blue` | `#007BFF` |
| CTA gradient | `linear(#F00BE9 → #007BFF)`, radius 60, shadows: `0 4 7 #0003`, `0 4 44 #F00BE940`, inset `0 4 6 #0004`, inset `-1 -4 7 #0004` |
| Nav button | transparent, 1px white border, radius 100, pad 8/24, glow `0 4 44 #F00BE940` |
| Feature: Secure | `#FF1CF7 → #D216CC`, edge inset `-15 -10 0 #A80AA3` |
| Feature: Paywalls | `#FF8C00 → #BC6903`, edge `#BA6802` |
| Feature: Access | `#00D564 → #008C41`, edge `#007737` |
| Feature: Recurring | `#007BFF → #025EC1`, edge `#004A99` |
| About card border | gradient `#FFFFFF → #F00BE9` (1px, `white/15`) |

**Type scale** (desktop → mobile, Montserrat)
| Role | Desktop | Mobile |
|---|---|---|
| Display ("Built for…") | 800 75/auto | 800 25 |
| H1 hero | 800 50/auto | 800 35 |
| H2 section | 800 50/auto | 800 25 |
| Hero sub | 400 30/46 | 400 16 |
| Section sub | 400 25/46 | — |
| Body (About) | 400 24/50 | smaller |
| Feature title / text | 800 40/34 · 500 28/38 | 800 24/20 · ~500 17 |
| Step title / text | 700 24 · 500 18/34 | 700 13 · 500 ~10 |
| Step number | 600 50 | smaller |
| FAQ question | 500 20/34 | 400 14 |
| Nav link | 600 16/34 | — |
| Footer link | 500 18/34 | — |
| Button | 600 20/34 (hero), 700 16 (nav) | the mobile hero button is 8px in Figma, so I'll bump it to ~14 for legibility |

**Layout**: desktop container 1412px (50px gutters at 1512), nav padding 30/95, section cards radius 40, feature grid 2×2 with 30px gap (cards 658×475, r30), FAQ list 1322 wide with 40px gaps. Mobile content 390 (20px gutters).

## Sections
| # | Section | Desktop node | Notes |
|---|---|---|---|
| 1 | Nav + Hero | `509:739` | Logo · About / Privacy policy / Terms / Contact · outlined "Launch on Telegram". H1 "The smart Telegram paywall bot", sub, gradient CTA (321×88). Rings image `509:741` behind. |
| 2 | Payment methods | `512:1492` | Glass card, H2, logos (Stable coins, Stripe, Paystack, Paypal), 3D coins image `516:3548`. |
| 3 | How to use Velto | `509:782` | Phone mockup + concentric rings, then 3 steps on a centre line (Connect / Set your preferences / Get Paid) with numbered rings and phone illustrations. Mobile: vertical line left. |
| 4 | About Velto | `509:1020` | 2 paragraphs + neon ring V graphic. Mobile: stacked. |
| 5 | Key Features | `509:985` | 4 gradient "3D" cards with vector icons (shield, gears, key, arrows). Mobile: 1 column, 390×281. |
| 6 | Built for… | `509:1060` | Display text over neon wave. |
| 7 | CTA banner | `509:1066` | "Your Telegram Group Can Start Earning Today", "With [logo]", CTA (263×55), phone mockup with bot chat. |
| 8 | FAQs | `509:1153` | 5 rows, + icon. |
| 9 | Footer | `509:1183` | Logo + "Gate. Grow. Get Paid.", links, Telegram / X / LinkedIn / Farcaster, © 2025. |
| — | Mobile menu | `359:2366` | Full-screen blurred overlay, centred links, outlined CTA, close icon top-right. |

## Assets (export from Figma via the browser, 2× PNG → WebP, SVG for logo)
- Velto logo + wordmark (Logos page `74:110`), favicon
- Hero rings `509:741`; side glow `509:737`
- 3D coins `516:3548`
- Phone mockups: hero (in `509:782`) and CTA (in `509:1066`), the 3 step phones
- About V-ring graphic (in `509:1020`)
- Feature icons (vector groups inside each feature card)
- Neon wave (`509:1060`)
- Payment logos: Tether, Stripe, Paystack, PayPal
- OG image: Logos page "Cover photo" `74:111`

## Build order
0. Scaffold Vite/React/TS/Tailwind, tokens in Tailwind theme, Montserrat, base layout.
1. Export & optimise assets into `src/assets`.
2. Nav + mobile menu (scroll lock, Esc to close, focus trap).
3. Sections 1→9, one component each, mobile-first with `lg:` desktop styles.
4. Interactions: FAQ accordion (single open, `aria-expanded`), smooth anchor scroll, subtle fade-up on scroll, honour `prefers-reduced-motion`.
5. Meta: title, description, OG/Twitter card, favicon.
6. QA: screenshot diff vs Figma at 1512 and 430, check 768/1024, Lighthouse, keyboard nav.
7. Deploy.

## Open questions
- **FAQ answers** are not in the file, only the 5 questions.
- **Links**: bot URL, X / LinkedIn / Farcaster / Telegram channel URLs, and where About, Privacy policy, Terms and Contact go (anchors on this page or separate pages?).
- Figma connector is rate-limited on the Starter plan, so assets will be exported via the signed-in browser instead.
