/// <reference types="cypress-mailslurp" />

describe("Tesla Enagage Email Registration", async function () {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  before(function () {
    return cy
      .mailslurp()
      .then((mailslurp) => mailslurp.createInbox())
      .then((inbox) => {
        // save inbox id and email address to this (make sure you use function and not arrow syntax)
        cy.wrap(inbox.id).as("inboxId");
        cy.wrap(inbox.emailAddress).as("emailAddress");
      });
  });

  it("Enagage Form: Email is submitted from UI to server!", function () {
    cy.visit("https://engage.tesla.com/");

    cy.contains("Get Updates");

    cy.get(".ctaContainer").within(() => {
      cy.get("input").type(this.emailAddress);
    });

    cy.get(".cta").click();
  });

  it("Enagage Form: Email is delievered", function () {
    cy.mailslurp()
      // use inbox id and a timeout of 30 seconds
      .then((mailslurp) => mailslurp.waitForLatestEmail(this.inboxId))
      // extract the confirmation code from the email body
      .then((email) => {
        expect(email.from).to.equal("engage@tesla.com");
        expect(email.to[0]).to.equal(this.emailAddress);
        expect(email.subject).to.equal("Welcome to Engage Tesla’s Newsletter!");
        expect(email.body).to.contains("Welcome to Engage Tesla!");
      });
  });
});
