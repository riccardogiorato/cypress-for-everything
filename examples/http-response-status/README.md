# http-response-status

## Written Tutorial

https://www.riccardogiorato.com/blog/a/cypress-http-response

## Examples
You can see all kind of examples of Http tests with different Status codes here: [tesla-http.ts](/cypress/integration/tesla-http.ts) ✨

## How does it work? 

Most of the code to check the status code is simply to send a cy.request without redirects, with this code you will be able to check if the server is redering to the correct page and if the status code is correct.

```typescript
it("http://tesla.com redirect", () => {
    cy.request({
      url: "http://tesla.com", // Url to Test
      followRedirect: false,
    }).then((resp) => {
      expect(resp.status).to.eq(301); // Status Code
      expect(resp.redirectedToUrl).to.eq("https://www.tesla.com"); // Final Redirect Url
    });
});
```
