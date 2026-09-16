# Sri Gayathri Travels

Mobile-first marketing site for Sri Gayathri Travels (Tirupati / Nellore cab services).

## Stack

- Vite + React + TypeScript
- `i18next` / `react-i18next` (EN, TE, TA, HI)
- Config-driven business, vehicles, services, routes, testimonials

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Where to change content

| What | File |
| --- | --- |
| Business name, phones, WhatsApp, email, social | `src/config/business.ts` |
| Vehicles | `src/config/vehicles.ts` |
| Services | `src/config/services.ts` |
| Routes | `src/config/routes.ts` |
| Testimonials | `src/config/testimonials.ts` |
| UI copy / WhatsApp templates | `src/i18n/locales/*.json` |
| Enabled languages | `src/config/languages.ts` |

Placeholder contact numbers are used until real business details are provided.
