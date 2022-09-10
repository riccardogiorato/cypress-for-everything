# Structured Data

Looking on the web you can find a few webistes to test out "Structured Data", most of them are mantained by Google but you always need to test manually with different Urls.

I wasn't happy with this workflow that's why I implemented "Structured Data Testing Tool" directly from withing Cypress!

To make it possible I had to follow the following steps:

1. Find a node/NPM package to test strucutred data
2. Implement a simple "Cypress Plugin" interface to make this package usable from within Cypress
3. Finally use the plugin to run this task and test out different pages.

## Examples

- [Apple Store testing for Strucutred Data](./cypress/e2e/apple-store.cy.ts) ✨

## How does it work?

To solve the previous 3 steps we did the following:

1. Install the package "structured-data-testing-tool" with

```typescript
yarn add structured-data-testing-tool
```

2. Create the Cypress Plugin code, you can copy most of the code from the plugins folder here, especially these 2 files:

- [cypress/plugins/structured-data-testing-tool/index.ts](cypress/plugins/structured-data-testing-tool/index.ts) ✨
- [cypress/plugins/index.ts](cypress/plugins/index.ts) ✨

3. Write some tests to test out the plugin: [apple-store](./cypress/e2e/apple-store.cy.ts) ✨
