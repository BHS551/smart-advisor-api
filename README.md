# smart-advisor-api

A NestJS API skeleton, intended as the backend for a language-model advisor
service.

## Status

The project structure is in place; the feature is not implemented. What exists:

- `app.module.ts`, `app.controller.ts`, `app.service.ts` — the standard NestJS
  root module
- `lenguage-model/` — a module, controller and service wired into the app, with
  the service still returning a `getHello()` placeholder
- Jest configuration with the default unit and e2e specs
- ESLint and Prettier configuration

There is no model integration, no prompt handling and no persistence. It is the
scaffold a service would grow from, kept as a record rather than as working
software.

## Running it

Requires Node.js and npm.

```bash
npm install
npm run start:dev      # http://localhost:3000
npm test
npm run test:e2e
```

> **Note.** The module directory is spelled `lenguage-model`; the intended
> spelling is `language-model`.
