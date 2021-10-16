/// <reference types="cypress-mailosaur" />

describe("Slack New Account Email", async function () {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  const testId = new Date().getTime();
  const serverId = "gr3rfyat"; // Replace this ID with your actual Mailosaur Server ID
  const testEmail = `slack-new-account${testId}@${serverId}.mailosaur.net`;

  it("Slack Create New Account: Email is submitted from UI to server!", function () {
    cy.visit("https://slack.com/intl/en-en/get-started#/createnew");

    cy.wait(3000);
    cy.get("body").then((body) => {
      if (body.find("#onetrust-policy-text").length > 0) {
        cy.log("Cookie banner found in the page! Close it!");
        cy.get("#onetrust-accept-btn-handler").click();
      } else {
        cy.log("No cookie banner found in the page");
      }
    });

    cy.get("#creator_signup_email").type(testEmail);

    cy.get("#submit_btn").within(($button) => {
      cy.wrap($button).should("have.text", "Continue");
      cy.wrap($button).click();
    });

    cy.get(".p-refreshed_page__heading").should(
      "have.text",
      "Check your email for a code"
    );
  });

  it("Slack Create New Account: Email is delievered", function () {
    cy.mailosaurGetMessage(serverId, {
      sentTo: testEmail,
    }).then((email) => {
      expect(email.from[0].email).to.have.string("@slack.com");
      expect(email.from[0].email).to.have.string("no-reply-");
      expect(email.to[0].email).to.equal(testEmail);
      expect(email.subject).to.have.string("Slack confirmation code:");
      expect(email.text.body).to.have.string("Confirm your email address");
      assert.isNotNull(email, `Email to confirm newsletter sign-up was found!`);
    });
  });
});
