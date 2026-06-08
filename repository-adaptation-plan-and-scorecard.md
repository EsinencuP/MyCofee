## Operating Mode

Selected mode:

- `Repository Adaptation`

Why this mode:

- текущий `MyCofee` не строится как greenfield с нуля
- в workspace уже есть подходящая локальная база `coffee-varca/frontend`
- задача проекта совпадает по классу: локальная кофейня, one-page route, menu + promo + map + social
- fastest safe path сейчас это адаптация уже работающего custom static pattern, а не новый стек или полный rewrite

Route depth:

- compressed repository-first route

Mandatory gates:

- repository constraints fixed
- repository scorecard completed
- adaptation boundary fixed
- current base approved for continued implementation

Compressed/skipped stages:

- full repository search on GitHub skipped
- remote license/activity verification skipped because current candidate is a local workspace source already inspected locally
- DB/ORM selection deferred because current phase is static

Risks of this route:

- pattern came from a different coffee project and can carry old assumptions if adaptation is incomplete
- no automated tests inherited from source
- ownership/license is assumed safe for internal workspace reuse, but external packaging should still verify provenance if needed

Next step:

- continue implementation on current adapted static base

## Repository Selection Scorecard

Project type:

- coffee shop landing page / light catalog / presentation MVP

Candidate repository/component:

- `C:\Users\User.DESKTOP\Documents\Web dev\coffee-varca\frontend`

Candidate role:

- `Base`

Access state:

- inspected locally

License/commercial note:

- local workspace source used as internal adaptation base
- explicit external license review is not documented here
- acceptable for current internal adaptation route, but provenance should be rechecked before any external redistribution outside the current workspace context

IPHOST deployment fit:

- excellent for shared hosting or static hosting

Score table:

| Criterion | Weight | Score | Note |
|---|---:|---:|---|
| Business fit | 5 | 4 | Same local coffee-shop landing pattern, but copy and structure needed adaptation |
| Architecture fit | 5 | 4 | Clean static split into html/css/js |
| Database fit | 5 | 5 | No DB needed for current phase |
| Security fit | 5 | 4 | Low-risk public static site pattern, but future forms need separate hardening |
| License/commercial use | 5 | 3 | Local/internal source acceptable; formal external provenance not documented |
| IPHOST deployment fit | 4 | 5 | Static deployment is straightforward |
| Maintenance/activity | 4 | 4 | Local controlled source, simple stack |
| Test/build reliability | 4 | 3 | Basic local preview works, no full automated test pipeline |
| Performance/SEO fit | 3 | 4 | Good base for fast landing page with semantic improvements |
| Accessibility/UI fit | 3 | 3 | Usable baseline, but WCAG pass still required |
| Team maintainability | 4 | 5 | Very maintainable for small frontend team |
| Complexity cost | 3 | 5 | Low complexity and low overhead |

Top reusable modules:

- one-page section layout
- anchor navigation structure
- hero + promo + map flow
- static asset separation
- lightweight vanilla JS for UI behavior
- localhost QA pattern

Modules to avoid rewriting:

- static page shell
- menu/filter interaction baseline
- shared section spacing/layout logic
- simple local preview workflow

Modules to adapt through config/wrappers:

- copy/content
- menu data
- branding
- hero image
- contact block
- promo mechanics

Modules to treat as reference only:

- old bilingual switch
- old Coffee Varca brand strings
- old schema data
- old promo semantics

Database/ORM/migration fit:

- not applicable for current static phase

Security concerns:

- forms are absent now, so risk is low
- if contact forms, analytics, embeds or map APIs are added, they need a separate baseline check

Performance/SEO concerns:

- hero image optimization must be maintained
- metadata and heading structure must stay consistent through future edits
- placeholder content should not leak into production launch

Maintenance concerns:

- keep adaptation boundary documented to avoid reintroducing old project strings
- track content replacements from client feedback carefully

Final decision:

- `Approved as base for current presentation MVP adaptation`

Decision needed from owner:

- accept `coffee-varca/frontend` as the approved local base pattern for continued adaptation into `MyCofee`

## 1. Архитектурный план

Project type:

- local coffee shop presentation landing page

Selected repository/repositories:

- base pattern: `C:\Users\User.DESKTOP\Documents\Web dev\coffee-varca\frontend`
- target project: `C:\Users\User.DESKTOP\Documents\Web dev\MyCofee\frontend`

Access state:

- inspected locally

Use as base:

- `coffee-varca/frontend`

Use as modules/components:

- sticky header pattern
- hero section composition
- section sequencing
- static JS behavior pattern

Use as reference only:

- language switch logic
- old schema copy
- old brand content

Do not use:

- any Coffee Varca-specific branding/content/assets

What existing functionality will be reused:

- custom static single-page layout
- menu section scaffold
- promo/map/content block routing
- no-framework frontend structure

What will be adapted:

- design tokens
- copy pack
- menu items and pricing
- QR promo block
- contact details
- hero visual

What must be custom-built and why:

- `MyCoffee` brand layer
- QR presentation block
- current presentation copy
- final client-specific content swap path

Backward compatibility risks:

- none critical, because this is adaptation into a separate target project, not modification of the source project in place

IPHOST deployment impact:

- static route remains IPHOST-friendly on shared hosting

## 2. Стек для работы с БД

Current phase:

- no database

If later required:

- DBMS: `PostgreSQL`
- reason: only if menu/news/promo editing requires a real admin/content workflow

Migration strategy:

- deferred until a dynamic phase is approved

## 3. Технический чек-лист для Codex

Current implementation rule:

- adapt approved local repository pattern first
- do not introduce framework/backend/DB complexity unless business need changes

Required software now:

- bundled Node.js runtime
- bundled Python runtime
- browser/localhost QA

Validation commands:

```powershell
& 'C:\Users\User.DESKTOP\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --check 'C:\Users\User.DESKTOP\Documents\Web dev\MyCofee\frontend\app.js'
```

```powershell
& 'C:\Users\User.DESKTOP\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' -m http.server 4186 -d 'C:\Users\User.DESKTOP\Documents\Web dev\MyCofee\frontend'
```

Adaptation checks:

- no old brand strings remain
- no old source assets remain in production path
- `image_source/` stays raw-only
- current frontend reflects the approved presentation structure
- placeholders are clearly marked as placeholders

Definition of done for this mode:

- approved local base documented
- reused modules mapped
- custom additions justified
- current target project continues on repository-first route, not greenfield route
