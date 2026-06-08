# MyCoffee Open-Source Stack Decision

Статус:

- проект: первая презентация сайта кофейни
- режим: custom static MVP
- policy: custom development only

## Professional Stack Decision

Project type:

- landing page / light catalog for a coffee shop

Recommended stack:

- current MVP: custom static `HTML + CSS + vanilla JS`
- production candidate after approval: `Astro static + custom components + custom CSS`

Why this stack:

- для первого показа нужен быстрый, чистый и дешевый в поддержке результат без лишнего backend-overhead
- текущий сайт не требует checkout, auth, личного кабинета, доставки, live API или CMS
- static route лучше всего подходит под цель: показать меню, акцию, адрес, карту и привести человека в кофейню
- кастомный статический MVP проще держать под полным контролем и быстрее адаптировать после ответа заказчика
- Astro остается лучшим следующим шагом, если после утверждения потребуется более системная компонентная сборка, SEO-структура и расширение контента

Rejected alternatives:

- `Next.js SSR/API` for current phase: избыточно для первой презентации
- `PostgreSQL + backend` for current phase: не нужен без admin/editing flow
- `WordPress / WooCommerce / Shopify / Tilda / Webflow / Framer`: запрещено production policy и не соответствует custom route

IPHOST hosting model:

- current MVP: shared hosting / static web hosting
- future Astro static export: shared hosting / static web hosting
- future dynamic admin/API phase: VPS or managed VPS

Required server capabilities:

- current MVP: static file hosting, HTTPS, custom domain, image delivery
- phase 2 if dynamic: Node.js runtime, process manager, reverse proxy, environment variables

Database/storage:

- current MVP: database not required
- media: optimized local assets inside repo
- future phase if editable content is requested: PostgreSQL + media storage

Admin/CMS approach:

- current MVP: no CMS
- content updates happen in code/content files
- future phase only if owner needs self-editing:
  - custom admin or lightweight headless content layer after separate fit decision

Security level:

- low-to-medium public marketing site baseline
- protect forms if/when contact form is added
- sanitize SVG/assets
- avoid exposing raw `image_source/`

Performance target:

- LCP <= 2.5s
- INP <= 200ms
- CLS <= 0.1

SEO target:

- semantic HTML
- proper H1/H2/H3 structure
- `CafeOrCoffeeShop` schema
- crawlable menu, promo, contacts and map sections

Team roles needed:

- designer
- frontend developer
- optional content/editor support after client approval

Risks:

- current MVP is intentionally placeholder-heavy
- no real client copy, menu, contacts or brand assets yet
- current static build is right for presentation, but not yet a final content workflow

Decision needed:

- approve current custom static route for presentation and next layout iterations
- decide later whether the production version stays static or moves to Astro

## Open-Source Stack Decision Matrix

### Option A

- Stack: custom static `HTML + CSS + vanilla JS`
- Status: `Approved for current phase`
- Use case: first presentation, fast demo, no backend, no CMS
- IPHOST fit: excellent on shared hosting
- Why: fastest safe route with lowest complexity and no framework lock-in

### Option B

- Stack: `Astro static + custom components + custom CSS`
- Status: `Recommended production candidate`
- Use case: approved website with stable structure, stronger component system, better maintainability
- IPHOST fit: excellent as static export
- Why: keeps speed and SEO while giving cleaner reusable architecture than raw static files

### Option C

- Stack: `Next.js static/ISR`
- Status: `Reference only for later expansion`
- Use case: only if the project grows into multi-page catalog, dynamic content, localization logic or future app-like features
- IPHOST fit: good only with VPS when server features are needed
- Why not now: overbuilt for the current scope

### Option D

- Stack: `frontend + PostgreSQL + custom backend/admin`
- Status: `Do not use in current phase`
- Use case: editable menu/admin or operational workflows
- IPHOST fit: VPS / managed VPS
- Why not now: no business need yet

## Repository-first Implementation Boundary

Base:

- `C:\Users\User.DESKTOP\Documents\Web dev\MyCofee\frontend\index.html`
- `C:\Users\User.DESKTOP\Documents\Web dev\MyCofee\frontend\styles.css`
- `C:\Users\User.DESKTOP\Documents\Web dev\MyCofee\frontend\app.js`

Selected repository for adaptation:

- local base pattern from `C:\Users\User.DESKTOP\Documents\Web dev\coffee-varca\frontend\`

Repository status:

- `Approved as base for current Repository Adaptation phase`

What was reused safely:

- single-page coffee-site pattern
- sticky header and anchor navigation idea
- section-based landing structure
- lightweight menu filtering with vanilla JS
- static local QA flow through local HTTP server

What was written new and justified:

- `MyCoffee`-specific copy
- new hero structure and visual direction
- QR promo block
- updated menu/demo prices
- contacts and map blocks for Chisinau presentation
- updated styling, spacing, palette and component treatment

What is explicitly not reused:

- old branding
- old copy
- old hero asset
- old sitemap assumptions tied to Coffee Varca

## Архитектурный план

1. Keep current presentation site as static custom frontend.
2. Treat current frontend as approved MVP base for fast iteration.
3. Store raw visuals only in `image_source/`.
4. Serve only optimized assets from `frontend/assets/` or a future production asset folder.
5. If the client approves the structure and only content changes remain, keep static route.
6. If the client asks for self-managed menu/promos/news, move to Astro and decide whether a CMS/admin layer is needed.
7. Add forms, analytics and map embed only after client data is confirmed.

## Стек для работы с БД

Current phase:

- DB is not required

If phase 2 requires editable content:

- DBMS: `PostgreSQL`
- Runtime: `Node.js`
- Hosting: `IPHOST VPS / managed VPS`
- ORM/migrations: choose once after the production repo/base is approved
- Rule: do not introduce DB/ORM before there is a real editing/business need

Why no DB now:

- no checkout
- no auth
- no order storage
- no admin workflow
- no dynamic catalog requirement

## Технический чек-лист для Codex

Project route:

- custom static landing page first
- repository-first pattern reuse second
- no framework migration until business need is confirmed

Required tools now:

- bundled Node.js runtime for JS validation
- bundled Python runtime for local static preview
- browser QA on localhost

Current useful commands:

```powershell
& 'C:\Users\User.DESKTOP\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --check 'C:\Users\User.DESKTOP\Documents\Web dev\MyCofee\frontend\app.js'
```

```powershell
& 'C:\Users\User.DESKTOP\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' -m http.server 4186 -d 'C:\Users\User.DESKTOP\Documents\Web dev\MyCofee\frontend'
```

Checks before next implementation round:

- verify responsive behavior on mobile and desktop
- replace placeholder copy when client data arrives
- replace demo prices/menu if client sends real menu
- confirm hero image/license/final photography
- add legal pages if moving toward release
- keep `image_source/_manifest/asset-inventory.csv` updated

Checks before production:

- final SEO metadata
- final contacts and map URL
- image optimization pass
- accessibility pass
- privacy/legal content
- analytics and consent approach

Definition of done for current phase:

- architecture route approved
- no unnecessary backend or DB introduced
- reused patterns mapped and justified
- new code only covers `MyCoffee` business-specific presentation needs
- static site runs locally and is presentation-ready
