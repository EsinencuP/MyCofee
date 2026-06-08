# Decision Log

Project:

- `MyCofee`

Current mode:

- `Full Project`

Current stage:

- `Project Roadmap Agreement / Discovery`

Last updated:

- `2026-06-08`

## Approved decisions

| ID | Decision | Stage | Date/context | Owner | Impact if changed |
|---|---|---|---|---|---|
| D-001 | Project type is a coffee shop website, not a mobile ordering app | Diagnostic | 2026-06-08 | User | Changes structure, stack and UX flow |
| D-002 | Primary structure includes hero, menu anchors, menu items, place features, contacts, map, promo + QR | Early scope | 2026-06-08 | User | Changes page architecture and layout |
| D-003 | Placeholder content is allowed for first presentation until client data arrives | Presentation route | 2026-06-08 | User | Changes copy, pricing, contacts and media |
| D-004 | Repository-first route is allowed and local base reuse is acceptable | Repository route | 2026-06-08 | User | Changes implementation path |
| D-005 | Project route changed from `Repository Adaptation` to `Full Project` | Route change | 2026-06-08 | User | Increases gate depth and required approvals |

## Assumptions

| ID | Assumption | Type | Status | Must confirm before | Notes |
|---|---|---|---|---|---|
| A-001 | Production version is still single-language unless client asks otherwise | Blocking | Open | Technical Specification | Affects content and navigation |
| A-002 | No admin/CMS is required for launch | Blocking | Open | Architecture approval | Affects stack and hosting |
| A-003 | QR promo remains presentation-friendly and does not require backend campaign logic | Blocking | Open | Technical Specification | Affects backend scope |
| A-004 | Map link, Instagram and menu remain the core conversion tools | Non-blocking | Confirmed | Layout | Matches current project logic |
| A-005 | IPHOST remains the deployment target | Non-blocking | Confirmed | Architecture approval | Changes hosting fit if revised |

## Open questions

| ID | Question | Department | Blocking? | Needed by | Default option |
|---|---|---|---|---|---|
| Q-001 | Нужен ли клиенту self-editing для меню и акций? | Architecture | Yes | Stack approval | No admin at launch |
| Q-002 | Один язык или multilingual launch? | Content / UX | Yes | Technical Specification | Single language |
| Q-003 | Нужна ли контактная форма или достаточно карты/телефона/Instagram? | UX / Backend | Yes | Technical Specification | No form |
| Q-004 | QR — это просто промо-визуал или будущая tracked-механика? | Marketing / Backend | Yes | Technical Specification | Static promo |

## Route changes

| ID | Change | From | To | Reason | Impact | Approved? |
|---|---|---|---|---|---|---|
| R-001 | Working mode change | Repository Adaptation | Full Project | User explicitly requested `$web-agency-director Full Project` | Requires roadmap, discovery, TЗ, design and architecture gates | Yes |

## Risk register

| ID | Risk | Category | Probability | Impact | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|
| RK-001 | Placeholder copy leaks into final production | Content | Med | High | Freeze placeholder markers and replace through content audit | Team | Open |
| RK-002 | Current frontend may need refactor after full discovery | Engineering | Med | Med | Freeze layout after Discovery and TЗ | Team | Open |
| RK-003 | Backend scope may grow if promo/form/admin requirements appear | Scope | Med | High | Confirm assumptions before stack freeze | Team | Open |
| RK-004 | Multilingual requirement may appear later and affect structure | UX / Content | Med | Med | Confirm language scope before TЗ approval | Team | Open |

## Phase 2 backlog

| Item | Why deferred | Dependency | Priority |
|---|---|---|---|
| Admin editing for menu/promos | Not needed for first presentation | Client requirement confirmation | Medium |
| Analytics / consent layer | Not required for demo stage | Launch preparation | Medium |
| Contact form backend | Not yet confirmed | Technical Specification | Medium |
| Rich map embed | Static route is enough for now | Launch polish | Low |
