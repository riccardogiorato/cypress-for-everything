describe("The Verge: Verge Deals Newsletter", async function () {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  const test_id = new Date().getTime();
  const incoming_mailbox = `${Cypress.env(
    "EMAIL_PRE"
  )}+${test_id}@${Cypress.env("EMAIL_POST")}`;

  it("Verge Deals Form: Email is submitted from UI to server!", function () {
    cy.visit("https://www.theverge.com/good-deals");

    cy.get("#privacy-consent-button").click();

    cy.get("#field_email").type(incoming_mailbox);

    cy.get(".c-newsletter_signup_box--form__body > .p-button").within(
      ($button) => {
        cy.wrap($button).should("have.text", "Subscribe");
        cy.wrap($button).click();
      }
    );

    cy.get(".c-newsletter_signup_box--form__success > h4").should(
      "have.text",
      "Just one more thing!"
    );
  });

  it("Verge Deals Form: Email is delievered", function () {
    cy.task("gmailCheck", {
      from: "deals@theverge.com",
      to: incoming_mailbox,
      subject: "Please confirm your sign-up to Verge Deals!",
    }).then((email) => {
      console.log(email);
      assert.isNotNull(email, `Email to confirm newsletter sign-up was found!`);
    });
  });
});
