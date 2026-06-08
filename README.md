# MyCoffee

Первая рабочая версия презентационного сайта кофейни.

## Что уже есть

- финальный presentation copy pack
- статический landing page
- демо-hero image
- placeholder-меню, контакты, promo + QR, карта

## Основные файлы

- `presentation-copy-pack-final.md`
- `frontend/index.html`
- `frontend/styles.css`
- `frontend/app.js`

## Локальный просмотр

### Актуальный preview через backend

```powershell
& 'C:\Users\User.DESKTOP\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' 'C:\Users\User.DESKTOP\Documents\Web dev\MyCofee\backend\server.mjs'
```

После запуска:

- `http://127.0.0.1:4187/`
- `http://127.0.0.1:4187/api/health`
- `http://127.0.0.1:4187/api/site-content`

### Старый static-only preview

```powershell
& 'C:\Users\User.DESKTOP\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' -m http.server 4186 -d 'C:\Users\User.DESKTOP\Documents\Web dev\MyCofee\frontend'
```

## Что заменить после ответа заказчика

- название и слоган
- реальные позиции меню и цены
- настоящий адрес
- телефон и Instagram
- условия QR-акции
- реальные фото и бренд-активы
