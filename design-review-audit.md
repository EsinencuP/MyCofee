1. Краткий вердикт:
   - Можно утверждать дизайн?
   - Нет

2. Оценка по 10-балльной шкале:
   - Коммерческая логика: 3/10
   - UX: 6/10
   - UI: 7/10
   - Mobile: 6/10
   - Accessibility WCAG 2.2 AA: 3/10
   - SEO-ready: 1/10
   - Performance-ready: 5/10
   - Development-ready: 3/10

3. Критичные проблемы:
   - Экспортированный дизайн не совпадает с утвержденным типом продукта. По брифу нужен `website landing/catalog` для офлайн-визита в кофейню, а по факту показан `mobile ordering app` с онбордингом, карточкой товара, заказом и delivery tracking.
   - Нет desktop-версии сайта.
   - Нет tablet-версии сайта.
   - Нет страниц и блоков, критичных для цели бизнеса: адрес, часы работы, карта, как добраться, QR-акция, Instagram CTA, контакты, legal pages.
   - Весь user flow ведет к заказу и доставке, а не к визиту в кофейню и сканированию QR для бесплатного кофе.
   - Нет SEO-структуры сайта: H1/H2, текстовых секций, FAQ, internal linking, schema-ready блоков.
   - Нет development handoff для состояний: hover, focus, active, disabled, error, loading, empty.
   - Контент и география не соответствуют проекту `MyCoffee / Moldova`: в дизайне видны чужие данные и сторонние названия.

4. Важные, но не критичные улучшения:
   - Упростить promo-banner на home: сейчас headline режется черными плашками и выглядит шумно.
   - Сделать chips категорий стабильнее по ширине и поведению в переполнении.
   - Сократить количество серых вторичных текстов с низким контрастом.
   - Убрать декоративные feature-icons в detail screen, если они не несут явной пользы.
   - Привести pricing и summary к одной логике форматирования и валюты.
   - Добавить реальные брендовые тексты и локальные фото вместо template-like заглушек.

5. Что уже хорошо:
   - Цветовая палитра теплая и подходит кофейной нише.
   - Базовая mobile UI-иерархия понятна: hero, список, карточка, detail, order.
   - Карточки продукта читаются быстро.
   - Primary CTA заметен.
   - Стиль достаточно современный и визуально чистый.
   - Фото кофе работают на аппетитность продукта.

6. Что нужно дорисовать:
   - Реальную главную страницу сайта, а не экран мобильного приложения.
   - Desktop и tablet версии.
   - Контакты с адресом, картой, часами работы и CTA `Построить маршрут`.
   - Блок `Сканируй QR и получи бесплатный кофе`.
   - Меню/каталог для сайта с фильтрацией, если каталог остается частью scope.
   - Footer с Instagram, телефоном, адресом, legal links.
   - Privacy Policy, Terms, Cookies.
   - 404 page.
   - States: hover, focus, active, disabled, empty cart, no results, loading, error, success.
   - Если заказ и доставка остаются в scope: success page, payment failed, order status history.

7. Что упростить:
   - Лишний app-like функционал, если задача остается website-first.
   - Delivery tracking screen, если цель проекта не доставка.
   - Онбординг, если продукт не мобильное приложение.
   - Черные плашки под текстом в promo-banner.
   - Количество декоративных элементов без функции.

8. Что усилить для конверсии:
   - В первом экране сайта показать: кто вы, где вы, почему зайти именно к вам, и как получить free coffee по QR.
   - Главный CTA заменить на сценарии бизнеса: `Открыть меню`, `Построить маршрут`, `Получить QR`.
   - Повторить CTA в середине и в конце страницы.
   - Добавить trust signals: реальные фото кофейни, адрес, часы, отзывы, Instagram/social proof.
   - Показать 3-5 хитов меню с ценами, а не только общий shopping UI.

9. Что усилить для SEO:
   - Сделать HTML-структуру под H1/H2/H3 для сайта кофейни.
   - Добавить текстовый блок о кофейне и формате заведения.
   - Добавить FAQ: часы работы, парковка, Wi-Fi, takeaway, акция с QR.
   - Подготовить место под schema.org: `LocalBusiness`, `CafeOrCoffeeShop`, `FAQPage`, `BreadcrumbList` если будет каталог.
   - Добавить индексируемые страницы `Menu`, `Contacts`, `About`, `Policies`.
   - Не вшивать важные офферы и адрес в картинки.

10. Что усилить для accessibility:
   - Повысить контраст placeholder, secondary text и price-summary текста.
   - Добавить видимые focus states для всех интерактивных элементов.
   - Не передавать selected state только цветом.
   - Подписать icon-only navigation текстом.
   - Проверить minimum touch targets 44x44 для chips, плюс/минус, filter button и nav icons.
   - Исключить текст поверх сложных фото без устойчивого contrast layer.

11. Что учесть разработчику:
   - Сначала зафиксировать platform decision: это сайт или мобильное приложение. Текущий дизайн пытается быть приложением, а бриф описывает сайт.
   - Если это сайт, текущий набор экранов нельзя передавать в разработку как final source of truth.
   - Компоненты для унификации: header/search, promo banner, category chips, product card, rating badge, quantity stepper, sticky CTA, summary rows, nav tabs.
   - Нужны token-level правила: spacing, radius, shadow, typography scale, icon sizes, grid, breakpoints.
   - Нужны все interactive states и reusable specs.
   - Из `image_source/` как source можно брать только approved originals. Для production нужны optimized версии:
   - Фото кофе и hero: `AVIF/WebP`, responsive sizes, прописанные dimensions, one LCP image only with priority/eager.
   - Иконки и логотип: `SVG`.
   - Декоративные фото ниже первого экрана: lazy-loading.
   - ALT: для контентных фото описательные, для декоративных пустые.
   - Raw `ai/eps/jpg/png` из `image_source/` нельзя тянуть напрямую в production.

12. IPHOST deployment note:
   - Если проект вернется к исходному сценарию `landing/catalog` для кофейни, достаточно custom website, который можно держать на shared hosting или легком статическом/SSR-compatible стеке в зависимости от реализации.
   - Если проект остается app-like с order flow, cart, payment, delivery tracking и live data, shared hosting станет слабым вариантом; нужен минимум VPS/VDS, а лучше managed VPS при кастомном backend.

13. Финальный список правок перед утверждением:
   - Must-have
   - Подтвердить тип продукта: сайт или мобильное приложение.
   - Перерисовать flow под бизнес-цель проекта: визит в кофейню, меню, адрес, QR-акция.
   - Дорисовать desktop/mobile website screens и ключевые информационные блоки.
   - Добавить SEO-ready и accessibility-ready структуру.
   - Добавить недостающие states для handoff в разработку.
   - Заменить нерелевантные локации, тексты и брендовые данные на `MyCoffee / Moldova`.
   - Should-have
   - Упростить promo-banner и secondary visual noise.
   - Усилить trust/content blocks реальными фото и офлайн-причинами прийти.
   - Подготовить legal/footer/contact system.
   - Nice-to-have
   - Подготовить mini design system page с tokens/components.
   - Продумать phase-2 app flow отдельно, если ordering действительно нужен позже.

14. Итоговое решение:
   - Вернуть на доработку
