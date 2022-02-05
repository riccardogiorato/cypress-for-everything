/// <reference types="cypress-mailosaur" />

describe("Medium New Account Email", async function () {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  const testId = new Date().getTime();
  const serverId = "gr3rfyat"; // Replace this ID with your actual Mailosaur Server ID
  const testEmail = `medium-new-account${testId}@${serverId}.mailosaur.net`;

  it("Medium Create New Account: Email is submitted from UI to server!", function () {
    cy.visit("https://medium.com/");

    cy.contains("Get started").click();

    cy.contains("Sign up with email").click();

    cy.get('input[aria-label="email"]').type(testEmail);

    cy.contains("Continue").click();
  });

  it("Medium Create New Account: Email is delievered", function () {
    cy.mailosaurGetMessage(serverId, {
      sentTo: testEmail,
    }).then((email) => {
      // expect(email.from[0].email).to.have.string("@slack.com");
      // expect(email.from[0].email).to.have.string("no-reply-");
      // expect(email.to[0].email).to.equal(testEmail);
      // expect(email.subject).to.have.string("Slack confirmation code:");
      // expect(email.text.body).to.have.string("Confirm your email address");
      assert.isNotNull(email, `Email to confirm newsletter sign-up was found!`);
    });
  });
});
