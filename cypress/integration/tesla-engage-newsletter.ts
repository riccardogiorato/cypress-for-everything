describe("Tesla Enagage Email Registration", async function () {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  const test_id = new Date().getTime();
  const incoming_mailbox = `${Cypress.env(
    "EMAIL_PRE"
  )}+${test_id}@${Cypress.env("EMAIL_POST")}`;

  it("Enagage Form: Email is submitted from UI to server!", function () {
    cy.visit("https://engage.tesla.com/");

    cy.contains("Get Updates");

    cy.get('body input[id="ember234-email-form"]').type(incoming_mailbox);

    cy.get('div[id="ember234"] button').click();
  });

  it("Enagage Form: Email is delievered", function () {
    cy.task("gmailCheck", {
      from: "engage@tesla.com",
      to: incoming_mailbox,
      subject: "Welcome to Engage Tesla’s Newsletter!",
    }).then((email) => {
      console.log(email);
      assert.isNotNull(email, `Email was not found`);
    });
  });
});
