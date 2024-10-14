# The `<Link />` href issues

This repo reproduces issues with `@tanstack/react-router` package when `createLink` is used together with `Link` component. The `src/View/Header.tsx` file contains two implementations for `LinkButton` component. The `LinkButton` uses `<a>` element while `LinkButton2` uses `<Link />` component provided by the library.

## Issue description

- The `createLink` component forwards the resolved options to render the `<a>` element which includes the `href` prop.
- However, the `<Link />` component ignores the `href` prop and instead renders the URL that is in the browser.
- Visit the root/home page and the **Tenant 2** anchor tag in the header renders invalid `href` value.

## Setup

Install the dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```
