describe("Discord New Account Email", async function () {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  const test_id = new Date().getTime();
  const testEmail = `discord-new-account${test_id}@$fake-email.com`;

  it("Discord Create New Account: Email is submitted from UI to server!", function () {
    cy.visit("https://discord.com/register", {
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

    cy.get('body input[name="email"]').type(testEmail);

    cy.get('body input[name="username"]').type(`discord-new-account${test_id}`);

    cy.get('body input[name="password"]').type(`${test_id}-${test_id}`);

    cy.get("body input[aria-label='Month']").click({ force: true });
    cy.get("#react-select-2-option-0").click();
    cy.get("body input[aria-label='Day']").click({ force: true });
    cy.get("#react-select-3-option-0").click();
    cy.get("body input[aria-label='Year']").click({ force: true });
    cy.get("#react-select-4-option-0").click();
  });
});
