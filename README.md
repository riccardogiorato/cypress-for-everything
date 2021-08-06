# cypress-for-everything
Using Cypress to test everything!

[Check out the latest run of the Cypress E2E tests!](https://github.com/riccardogiorato/cypress-for-everything/actions)

[![CI](https://github.com/riccardogiorato/cypress-for-everything/actions/workflows/main.yml/badge.svg?branch=main&event=push)](https://github.com/riccardogiorato/cypress-for-everything/actions/workflows/main.yml)


# Are you looking to do all sort of testing within Cypress?

## Testing Http Requests and Http Redirects
See all kind of examples of Http tests here: [tesla-http.ts](/cypress/integration/tesla-http.ts)
```typescript
it("http://tesla.com redirect", () => {
    cy.request({
      url: "http://tesla.com",
      followRedirect: false,
    }).then((resp) => {
      expect(resp.status).to.eq(301);
      expect(resp.redirectedToUrl).to.eq("https://www.tesla.com");
    });
});
```

## Testing SEO stuff like Titles, Canonicals Open Graph and Twitter metatags
See all kind of examples of SEO tests here: [tesla-seo.ts](/cypress/integration/tesla-seo.ts)

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