describe("Metadata Open Graph / Facebook", () => {
  const title = "Electric Cars, Solar & Clean Energy | Tesla";
  const baseUrlTesla = "https://www.tesla.com/";
  before(function () {
    // runs once before all tests in the block
    cy.visit(baseUrlTesla);
  });
  /**
   * Open Graph Metadata
   */
  it("tesla.com should have correct og:title", () => {
    cy.get('head meta[property="og:title"]').should(
      "have.attr",
      "content",
      title
    );
  });

  const description =
    "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.";
  it("tesla.com should have correct og:description", () => {
    cy.get('head meta[property="og:description"]').should(
      "have.attr",
      "content",
      description
    );
  });

  it("tesla.com should have correct og:site_name", () => {
    cy.get('head meta[property="og:site_name"]').should(
      "have.attr",
      "content",
      "Tesla"
    );
  });
  it("tesla.com should have correct og:type", () => {
    cy.get('head meta[property="og:type"]').should(
      "have.attr",
      "content",
      "website"
    );
  });
  it("tesla.com should have correct og:url", () => {
    cy.get('head meta[property="og:url"]').should(
      "have.attr",
      "content",
      baseUrlTesla
    );
  });
});
