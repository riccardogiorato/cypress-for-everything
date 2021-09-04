describe("Slack New Account Email", async function () {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  const test_id = new Date().getTime();
  const incoming_mailbox = `${Cypress.env(
    "EMAIL_PRE"
  )}+${test_id}@${Cypress.env("EMAIL_POST")}`;

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

    cy.get("#creator_signup_email").type(incoming_mailbox);

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
    cy.task("gmailCheck", {
      to: incoming_mailbox,
    }).then((emails) => {
      const email = emails[0];
      expect((email as any).from).to.have.string("@slack.com");
      expect((email as any).from).to.have.string("no-reply-");

      expect((email as any).subject).to.have.string("Slack confirmation code:");
      expect((email as any).subject).to.have.string("Slack confirmation code:");

      assert.isNotNull(email, `Email to confirm newsletter sign-up was found!`);
    });
  });
});
