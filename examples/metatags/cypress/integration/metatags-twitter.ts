describe("Metadata Twitter", () => {
  const title = "Electric Cars, Solar & Clean Energy | Tesla";
  const baseUrlTesla = "https://www.tesla.com/";
  before(function () {
    // runs once before all tests in the block
    cy.visit(baseUrlTesla);
  });
  /**
   * Twitter Metadata
   */
  it("tesla.com should have correct twitter:title", () => {
    cy.get('head meta[name="twitter:title"]').should(
      "have.attr",
      "content",
      title
    );
  });

  const description =
    "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.";
  it("tesla.com should have correct twitter:description", () => {
    cy.get('head meta[name="twitter:description"]').should(
      "have.attr",
      "content",
      description
    );
  });

  it("tesla.com should have correct twitter:url", () => {
    cy.get('head meta[name="twitter:url"]').should(
      "have.attr",
      "content",
      baseUrlTesla
    );
  });

  it("tesla.com should have correct twitter:site", () => {
    cy.get('head meta[name="twitter:site"]').should(
      "have.attr",
      "content",
      "@tesla"
    );
  });

  it("tesla.com should have correct twitter:creator", () => {
    cy.get('head meta[name="twitter:creator"]').should(
      "have.attr",
      "content",
      "@tesla"
    );
  });
});
