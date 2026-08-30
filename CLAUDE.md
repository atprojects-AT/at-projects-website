# A&T Projects BV — сайт

Заказ с фриланса (400 EUR): одностраничный сайт для бельгийской строительно-электромонтажной
компании **A&T Projects BV** (Kerkstraat 108, 9050 Gentbrugge/Gent, Бельгия, работает с 1989,
сертификация VCA**). Контент и структура сайта пересобраны 1-в-1 по референсу, который клиент
прислал заказчику через WhatsApp (скриншоты готового черновика на нидерландском).

## Стек

- **Astro** (static output) + **Tailwind CSS v4** (через `@tailwindcss/vite`, тема — `@theme` в
  `src/styles/global.css`)
- Ванильный JS для анимаций (IntersectionObserver reveal-on-scroll, счётчики цифр, тикер-бегущая
  строка, лайтбокс для сертификатов) — без React/фреймворков, сайт статический и лёгкий
- Шрифт — Inter (Google Fonts)
- Деплой — **Vercel**, репозиторий — **GitHub**

## Структура секций (src/components)

Header (sticky, с бегущей строкой-тикером) → Hero → Stats (1989/VCA**/3/BE) → Services (Diensten,
3 услуги списком) → About (Over ons, 3 шага процесса) → WhyUs (тёмный блок "Waarom A&T Projects")
→ Safety (Veiligheid — 3 пункта + реальные фото сертификатов с лайтбоксом) → Contact (красная
секция, контактная инфа без формы) → Footer.

Язык сайта — **нидерландский (nl)**, под аудиторию клиента в Бельгии.

## Бренд

- Логотип клиента: `public/images/logo.png` (сконвертирован из `assets-input/logo.jpg` через
  sharp), фавиконы сгенерированы из него же
- Фирменный красный `#d80000` — взят пипеткой (сэмплинг пикселей через sharp) с реального лого,
  не придуман на глаз
- Тёмно-угольный + кремовый — вторичные цвета, подобраны под референс клиента

## Сертификаты

Реальные фото (VCA** компании, VCA VOL диплом, BA4) лежат в `public/images/certificates/`.
Фото были сняты на телефон в рамке на столе (блики, фон офиса) — обработаны через sharp
(normalize/modulate/sharpen) и обрезаны через CSS `object-position` в карточках, чтобы в кадр
попадал сертификат, а не фон; полное фото открывается в лайтбоксе по клику.

## Статус / что сделано

- Сайт полностью собран и задеплоен: **https://atprojects.vercel.app** (прод)
- GitHub: **https://github.com/MuratGaytemirovv/at-projects-website** (приватный, на аккаунте
  фрилансера `MuratGaytemirovv`)
- Vercel-проект `muratgaytemirovvs-projects/atprojects`, подключён к GitHub-репо — пуш в `master`
  автоматически деплоит прод

## Что осталось / договорённости с клиентом

- Ссылки на соцсети (LinkedIn/Instagram/Facebook) — пока плейсхолдеры (`href="#"`), клиент
  пришлёт позже
- Email/телефоны на сайте распознаны с фото визитки/лого клиента — если будут расхождения, сверить
- **Владение аккаунтами**: договорились завести клиенту отдельный Vercel-аккаунт и передать туда
  проект (`vercel project transfer` или через UI) + либо передать GitHub-репозиторий
  (`gh repo transfer` / Settings → Transfer ownership), либо добавить клиента как collaborator —
  пока сайт живёт на аккаунте фрилансера, это временное решение до появления аккаунта клиента
- Домен клиента (если появится) ещё не подключён — сейчас только `*.vercel.app`

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
