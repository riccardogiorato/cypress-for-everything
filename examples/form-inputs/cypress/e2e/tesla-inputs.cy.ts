describe("Tesla Newsletter Form Inputs", async function () {
  const testId = new Date().getTime();
  const fake_email = `fake.email.cypress4everything+${testId}@gmail.com`;

  it("Newsletter Form: Email is submitted from UI to server!", function () {
    cy.visit("https://www.tesla.com/updates", {
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Cache-Control": "max-age=0",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
      },
    });
    cy.wait(2000);
    cy.get(":nth-child(1) > .tds-icon-btn").click({
      force: true,
    });

    cy.contains("Stay Connected");

    cy.get('body input[name="firstName"]').type(`name ${testId}`);
    cy.get('body input[name="lastName"]').type(`name ${testId}`);

    cy.get('body input[name="email"]').type(fake_email);

    cy.get('body input[name="zip"]').type(testId.toString());

    cy.get("input[name='productInterested'][value='Model S']").click();
    cy.get("input[name='productInterested'][value='Model 3']").click();
    cy.get("input[name='productInterested'][value='Model X']").click();
    cy.get("input[name='productInterested'][value='Model Y']").click();

    cy.get('body button[type="submit"]').within(($button) => {
      cy.wrap($button).should("have.text", "Submit");
      cy.wrap($button).click();
    });
    cy.contains("Thank you");
    cy.contains("We'll notify you of any product updates, news or events.");
  });
});
