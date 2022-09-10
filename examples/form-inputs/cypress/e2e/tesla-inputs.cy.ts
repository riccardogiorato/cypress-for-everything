describe("Tesla Newsletter Form Inputs", async function () {
  const testId = new Date().getTime();
  const fake_email = `fake.email.cypress4everything+${testId}@gmail.com`;

  it("Newsletter Form: Email is submitted from UI to server!", function () {
    cy.visit("https://www.tesla.com/updates");
    cy.wait(2000);
    cy.get(".tds-modal-close > .tds-icon").click({
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
