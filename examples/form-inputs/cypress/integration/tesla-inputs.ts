describe("Tesla Newsletter Form Inputs", async function () {
  const test_id = new Date().getTime();
  const fake_email = `fake.email.cypress4everything+${test_id}@gmail.com`;

  it("Newsletter Form: Email is submitted from UI to server!", function () {
    cy.visit("https://www.tesla.com/updates");
    cy.wait(2000);
    cy.get(".tds-modal-close > .tds-icon").click({
      force: true,
    });

    cy.contains("Stay Connected");

    cy.get('body input[name="/firstName"]').type(`name ${test_id}`);
    cy.get('body input[name="/lastName"]').type(`name ${test_id}`);

    cy.get('body input[name="/email"]').type(fake_email);

    cy.get('body input[name="/zip"]').type(test_id.toString());

    cy.get("fieldset input[id='/productInterested_Model S']").click();
    cy.get("fieldset input[id='/productInterested_Model 3']").click();
    cy.get("fieldset input[id='/productInterested_Model X']").click();
    cy.get("fieldset input[id='/productInterested_Model Y']").click();

    cy.get('body button[type="submit"]').within(($button) => {
      cy.wrap($button).should("have.text", "Submit");
      cy.wrap($button).click();
    });
    cy.contains("Thank you");
    cy.contains("We'll notify you of any product updates, news or events.");
  });
});
