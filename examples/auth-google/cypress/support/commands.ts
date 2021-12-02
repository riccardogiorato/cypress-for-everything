declare namespace Cypress {
  interface Chainable<Subject> {
    loginGoogle(): void;
  }
}

Cypress.Commands.add("loginGoogle", () => {
  cy.visit("https://accounts.google.com/Login?hl=en");
  cy.location().then((loc) => {
    if (!loc.href.includes("https://myaccount.google.com")) {
      cy.get("#Email").type(Cypress.env("GMAIL_EMAIL"));
      cy.get("#next").click();
      cy.get("#password").type(Cypress.env("GMAIL_PASSWORD"));
      cy.get("#submit").click();
    }
  });
});
