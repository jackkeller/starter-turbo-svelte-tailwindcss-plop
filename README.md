# Turborepo Svelte TailwindCSS Plop.js starter

This starter has boilerplate that allows for easy app generation using [Plop.js](https://plopjs.com "Plop generates code when you want, how you want, and can be changed whenever you want.")

## Using this example

Use this as a template for a [new repository](https://github.com/new?template_name=starter-turbo-svelte-tailwindcss-plop&template_owner=jackkeller).


### Initial Setup

> If you're more into using yarn or npm you'd just delete the pnpm-lock.yaml, change the `packageManager` field in the root package.json and run your install of choice.

```sh
pnpm install
pnpm dev
```

### Generating a new app

> Run the script below and follow the prompts.

```sh
pnpm generate:app
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [svelte-kit](https://kit.svelte.dev/) app
- `web`: another [svelte-kit](https://kit.svelte.dev/) app
- `ui`: a stub Svelte component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-plugin-svelte` and `eslint-config-prettier`)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Playwright](https://playwright.dev) for integration testing
- [Vitest](https://vitest.dev) for unit tests
- [Plop.js](plopjs.com) for generating additional apps
