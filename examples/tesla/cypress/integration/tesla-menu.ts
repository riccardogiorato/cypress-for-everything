describe("Tesla Menu", () => {
  const baseUrlTesla = "https://www.tesla.com/";
  it("tesla.com should have top menu working", () => {
    cy.visit(baseUrlTesla);
    cy.get(".tds-modal-close > .tds-icon").click({ force: true });
    cy.get(".tds-modal > .tds-site-nav-items").within(() => {
      cy.contains("Model S");
      cy.contains("Model 3");
      cy.contains("Model X");
      cy.contains("Model Y");
    });
  });

  it("tesla.com should have top menu with all car models", () => {
    cy.get(".tds-modal > .tds-site-nav-items").within(() => {
      cy.get('[href="/models"]').should("have.text", "Model S");
      cy.get('[href="/model3"]').should("have.text", "Model 3");
      cy.get('[href="/modelx"]').should("have.text", "Model X");
      cy.get('[href="/modely"]').should("have.text", "Model Y");
    });
  });

  it("tesla.com should have top menu with all car models", () => {
    cy.get(".tds-modal > .tds-site-nav-items").within(() => {
      cy.get('[href="/models"]').should("have.text", "Model S");
      cy.get('[href="/model3"]').should("have.text", "Model 3");
      cy.get('[href="/modelx"]').should("have.text", "Model X");
      cy.get('[href="/modely"]').should("have.text", "Model Y");
    });
  });

  it("tesla.com should have top menu with all energy stuff", () => {
    cy.get(".tds-modal > .tds-site-nav-items").within(() => {
      cy.get('[href="/solarroof"]').should("have.text", "Solar Roof");
      cy.get('[href="/solarpanels"]').should("have.text", "Solar Panels");
      cy.get('[href="/powerwall"]').should("have.text", "Powerwall");
      cy.get('[href="/commercial"]').should("have.text", "Commercial Energy");
      cy.get('[href="/utilities"]').should("have.text", "Utilities");
    });
  });
});
