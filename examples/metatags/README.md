# Metatags

Checkin metatags is really simple with cypress!

## Examples 

- [Primary Metatags](cypress/integration/metatags-primary.ts): check title and metatags for title and description ✨
- [Open Graph Metatags](cypress/integration/metatags-opengraph-og.ts): check og or opengraph metatags ✨
- [Twitter Metatags](cypress/integration/metatags-twitter.ts): check twitter metatags for twitter card previews ✨

## [Primary Metatags](cypress/integration/metatags-primary.ts)

You can find the complete file here: [metatags-primary.ts](cypress/integration/metatags-primary.ts) ✨

### Testing Page Title
```typescript
  it("tesla.com should have correct title", () => {
    cy.visit("https://www.tesla.com/");
    cy.title().should("eq", "Electric Cars, Solar & Clean Energy | Tesla");
  });
```
### Testing Page Canonical
```typescript
  it("tesla.com should have correct canonical", () => {
    cy.visit("https://www.tesla.com/");
    cy.get('head link[rel="canonical"]').should(
      "have.attr",
      "href",
      "https://www.tesla.com/"
    );
  });
```

## Open Graph Metatags

You can find the complete file here: [metatags-opengraph-og.ts](cypress/integration/metatags-opengraph-og.ts) ✨

### Testing Open Graph og:site_name
```typescript
  it("tesla.com should have correct og:site_name", () => {
    cy.visit("https://www.tesla.com/");
    cy.get('head meta[property="og:site_name"]').should(
      "have.attr",
      "content",
      "Tesla"
    );
  });
```

## Twitter Metatags

You can find the complete file here: [metatags-twitter.ts](cypress/integration/metatags-twitter.ts) ✨

### Testing Twitter metatag like twitter:creator
```typescript
  it("tesla.com should have correct twitter:creator", () => {
    cy.visit("https://www.tesla.com/");
    cy.get('head meta[name="twitter:creator"]').should(
      "have.attr",
      "content",
      "@tesla"
    );
  });
```