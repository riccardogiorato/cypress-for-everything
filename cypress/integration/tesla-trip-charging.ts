describe("Tesla Trip", () => {
  const baseUrlTesla = "https://www.tesla.com/";
  it("tesla.com charging page should lead to trips", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit(baseUrlTesla + "charging");
    cy.get(".header-lower").should("have.text", "Stay Charged");
    cy.get("body").type("{pagedown}");
    cy.contains("Plan My Trip").first().click({ force: true });

    cy.url().should("eq", baseUrlTesla + "trips");
    cy.get("h1").should("have.text", "Go Anywhere");
  });
  it("tesla.com charging page should lead to trips", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit(baseUrlTesla + "trips");
    cy.get("h1").should("have.text", "Go Anywhere");

    cy.get("input[placeholder='Enter location']").type("Venezia Italy");
    cy.get("#autocomplete > li").should("have.length.above", 0);
    cy.get("#autocomplete > li").first().contains("Venezia, Metropolitan");
    cy.get("#autocomplete > li").first().click();

    cy.get("input[placeholder='Enter destination']").type(
      "Tesla Str. 1, 15537 Grünheide (Mark)"
    );
    cy.get("#autocomplete > li").should("have.length.above", 0);
    cy.get("#autocomplete > li").first().contains("Tesla Str");
    cy.get("#autocomplete > li").first().click();

    cy.get(".route__btn").click();

    cy.get(".route__info > .copy").contains("Est. Gas Savings");
  });
});
