# Sitemap

## Getting the array of all the Urls from the sitemap.xml 
```javascript
  let urls = [];
  before(() => {
    cy.request({
      url: "https://www.vercel.com/sitemap.xml",
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    })
      .as("sitemap")
      .then((response) => {
        urls = Cypress.$(response.body)
          .find("loc")
          .toArray()
          .map((el) => el.innerText);
      });
  });
```

## Full Check

For a complete check we then need to check if the Urls are valid.

```javascript
  it("should succesfully load each url in the sitemap", () => {
    urls.forEach((url) => {
      cy.visit(url);
    });
  });
```

## Fast Check

Checking a sitemap for missing pages can take a long time with cypress using cy.visit.
This is due to the fact that "cy.visit" will wait for the page javascript to have fully loaded.
If we want to check the rendered pages faster we just check for the response from the server when we ask for the page.
If the server sends us back a 200 response we continue to the next page!

## Integration Files

- [Fast Sitemap Check](cypress/integration/sitemap-fast.ts): check the sitemap fast, checks only 200 response to page urls
- [Slow Sitemap Check](cypress/integration/sitemap-slow.ts): check the complete page fully loaded