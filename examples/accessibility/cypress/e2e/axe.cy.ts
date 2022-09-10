import "cypress-axe";

describe("Accessibility test with Axe Core", async function () {
  it("A11Y on deque.com", function () {
    cy.visit("https://deque.com/axe/");
    cy.injectAxe();
    // Do not fail the test when there are accessibility failures
    cy.checkA11y(null, null, null, true);
  });

  it("A11Y on riccardogiorato.com", function () {
    cy.visit("https://www.riccardogiorato.com/");
    cy.injectAxe();
    cy.checkA11y(
      null,
      null,
      (violations) => {
        expect(violations.length).to.be.equal(1);
      },
      true
    );
  });
});
