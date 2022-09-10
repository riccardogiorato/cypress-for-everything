# Sitemap

To test a sitemap usually you need 2 steps:

1. Reading the sitemap.xml
2. Check the Urls

> Written Tutorial on Medium: https://javascript.plainenglish.io/how-to-test-a-sitemap-with-cypress-31b99cccd600

## Reading the sitemap.xml

Getting the array of all the Urls from the sitemap.xml file and parsing it to get all the complete links!

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

## Check the Urls

Now you will need to scan the entire list of links and check if they are valid! We prepared two possibilities to do it:

- [Fast Check](./cypress/e2e/sitemap-fast.cy.ts): check the sitemap fast, checks only 200 response to page urls from the server. ✨
- [Slow Check](./cypress/e2e/sitemap-slow.cy.ts): check the complete page fully loaded waiting for javascript to load. ✨

### Fast Check

Checking a sitemap for missing pages can take a long time with cypress using cy.visit.
This is due to the fact that "cy.visit" will wait for the page javascript to have fully loaded.
If we want to check the rendered pages faster we just check for the response from the server when we ask for the page.
If the server sends us back a 200 response we continue to the next page!

```javascript
it("should succesfully load each url in the sitemap", () => {
  urls.forEach((url) => {
    cy.request({
      url: url,
      headers: {
        "Content-Type": "text/html",
        accept: "*/*",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });
});
```

### Slow Check

For a complete check we then need to check if the Urls are valid.

```javascript
it("should succesfully load each url in the sitemap", () => {
  urls.forEach((url) => {
    cy.visit(url);
  });
});
```
