## Operating Mode

Selected mode:

- `Full Project`

Why this mode:

- проект перешел из быстрого presentation MVP в полноценный маршрут агентского производства
- теперь важно не только показать демо, но и выстроить управляемый процесс от брифа до сдачи
- уже есть начальная база, но дальнейшие решения по контенту, дизайну, стеку, backend, QA и handoff должны идти через полные gate stages

Route depth:

- full agency route

Mandatory gates:

- Project Roadmap approved
- Discovery complete
- Technical Specification approved
- Layout / Wireframe approved
- Design Direction approved
- Architecture / Repository / Stack approved
- Development ready for QA
- Launch / Handoff approved

Compressed/skipped stages:

- none by default

Risks of this route:

- потребуется больше времени на согласование и фиксацию решений
- текущий demo-content и placeholder data придется постепенно заменить на подтвержденные данные клиента
- часть уже написанного кода может потребовать refinement после discovery and layout freeze

Next step:

- complete Diagnostic Summary and start formal Discovery

## Diagnostic Summary

Project type:

- custom landing page with light catalog behavior for a coffee shop

Business goal:

- first commercial website for coffee shop presentation and later production handoff

Primary conversion:

- open menu
- see address and map
- visit the coffee shop
- use QR promo

Audience and region:

- students and office workers
- B2C
- Moldova / Chisinau

Custom development need:

- yes

Content/admin need:

- not confirmed for launch
- currently no admin is required
- may be needed later if owner wants to edit menu/promos independently

Commerce/payment need:

- no checkout/payment required in current approved business scenario

Integrations:

- map link
- Instagram
- possible analytics later
- possible contact or lead form later

Legal/security level:

- public marketing site
- low-to-medium risk baseline

Performance/SEO level:

- high importance
- mobile-first, strong Core Web Vitals, semantic SEO

IPHOST hosting model:

- current likely route: shared hosting/static hosting
- if dynamic editing/admin is added later: VPS / managed VPS

Recommended route:

- Full Project with repository-first architecture awareness

Blocking questions:

- does the final production version require self-editing by the client
- does the final scope include one language or multilingual support
- will a contact/reservation form be required
- is the QR promo static or tied to tracked campaign logic

Safe assumptions:

- mobile-first responsive site
- custom development only
- IPHOST-first deployment
- WCAG 2.2 AA target
- basic SEO and analytics required
- Git-based workflow

Next gate:

- Discovery

## План работы от брифа до сдачи

### 1. Маршрут проекта

| Этап | Что делаем | Что получаем на выходе | Ваше решение | Можно изменить/вернуться? |
|---|---|---|---|---|
| 0. План проекта | Фиксируем полный маршрут, контрольные точки, правила возврата | Управляемый процесс работы | Принять full route | Да |
| 1. Discovery | Уточняем бизнес, ЦА, язык, контент, интеграции, launch constraints | Discovery brief | Подтвердить допущения | Да |
| 2. Market & competitor | Уточняем позиционирование и локальную подачу | Market notes + differentiation | Принять/скорректировать | Да |
| 3. Technical Specification | Фиксируем страницы, блоки, content rules, CTA, legal scope | ТЗ | Утвердить | Да |
| 4. Layout / Wireframe | Фиксируем структуру страницы и CTA flow | Схема сайта / wireframe | Утвердить | Да |
| 5. Design Direction | Цвета, типографика, media direction, components | Design direction | Утвердить | Да |
| 6. Architecture / Repository / Stack | Финальный стек, reuse boundaries, hosting fit | Architecture decision | Утвердить | Да |
| 7. Development | Реализация frontend/backend/content structure | Рабочая сборка | Review / continue | Частично |
| 8. QA | Проверка UX, responsiveness, a11y, SEO basics, bugs | QA pass / bug list | Принять исправления | Частично |
| 9. Launch / Handoff | Подготовка к публикации и передаче | Release/handoff package | Утвердить | Да |

### 2. Контрольные точки

- План проекта утвержден
- Discovery завершен
- ТЗ утверждено
- Схема сайта утверждена
- Дизайн-направление утверждено
- Архитектура и стек утверждены
- Разработка готова к QA
- Запуск / передача утверждены

### 3. Где можно менять решение

- До утверждения этапа — свободно
- После утверждения этапа — можно вернуться, но это влияет на сроки, структуру, код и контент
- После начала разработки — изменения дороже и должны явно фиксироваться как возврат этапа

### 4. Что нельзя пропускать

- Discovery
- ТЗ
- Layout / Wireframe
- Design Direction
- Architecture / Repository / Stack decision
- QA before launch

### 5. Решение сейчас

Предлагаю маршрут:

- `Full Project` с уже существующей repository-first базой

Почему:

- это сохраняет уже сделанную работу
- не теряет управление над будущими изменениями
- позволяет довести проект до production-ready состояния, а не оставлять на demo уровне
