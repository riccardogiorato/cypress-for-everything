# Url Query

Url query parameters are the base of the dynamic web and they are used by all the main search engines to implment their search funcionalities.

## Examples

- [search-bing.cy.ts](./cypress/e2e/search-bing.cy.ts): searching in bing, we also check for a cookie banner to hide it. ✨
- [search-bing.cy.ts](./cypress/e2e/search-brave.cy.ts): searching in brave search beta ✨
- [search-duckduckgo.cy.ts](./cypress/e2e/search-duckduckgo.cy.ts): searching in duckduckgo ✨

## How does it work?

For example if we can to test that a Url has a q= parameter, we can use the following code:

```typescript
cy.url().should("include", "q=");
```

The previous code is just a simple check but to make sure that this value was actually parsable and present in the Url we can use this code:

```typescript
cy.location().then((location) => {
  // here we can access the location searchParams directly with the URL constructor
  const searchQuery = new URL(location.href).searchParams.get("q");
  // we then check that the searched text is in the query in the URL
  expect(searchQuery).to.equal("searched text");
});
```
