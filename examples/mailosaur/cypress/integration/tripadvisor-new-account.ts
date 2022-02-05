/// <reference types="cypress-mailosaur" />

describe("Tripadvisor New Account Email", async function () {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  const testId = new Date().getTime();
  const serverId = "gr3rfyat"; // Replace this ID with your actual Mailosaur Server ID
  const testEmail = `tripadvisor-new-account${testId}@${serverId}.mailosaur.net`;

  it("Tripadvisor Create New Account: Email is submitted from UI to server!", function () {
    cy.visit("https://www.tripadvisor.com", {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, "language", { value: "en-GB" });
        Object.defineProperty(win.navigator, "languages", { value: ["en"] });
        Object.defineProperty(win.navigator, "accept_languages", {
          value: ["en"],
        });
      },
      headers: {
        "Accept-Language": "en",
      },
    });

    cy.contains("Sign in").click();

    cy.wait(4000);

    cy.get("#_evidon-accept-button").click();

    cy.get(".regEmailContinue").click();

    cy.contains("Join").click();

    cy.get("#regSignUp\\.firstName").type("Test");
    cy.get("#regSignUp\\.lastName").type("User");
    cy.get("#regSignUp\\.email").type(testEmail);
    cy.get("#regSignUp\\.password").type(`password-${testId}-password`);

    cy.get(".signUpBody > .coreRegCTAWrapper > .ui_button").click();
  });

  // it("Tripadvisor Create New Account: Email is delievered", function () {
  //   cy.mailosaurGetMessage(serverId, {
  //     sentTo: testEmail,
  //   }).then((email) => {
  //     // expect(email.from[0].email).to.have.string("@slack.com");
  //     // expect(email.from[0].email).to.have.string("no-reply-");
  //     // expect(email.to[0].email).to.equal(testEmail);
  //     // expect(email.subject).to.have.string("Slack confirmation code:");
  //     // expect(email.text.body).to.have.string("Confirm your email address");
  //     assert.isNotNull(email, `Email to confirm newsletter sign-up was found!`);
  //   });
  // });
});
