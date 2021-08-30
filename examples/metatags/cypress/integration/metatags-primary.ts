describe("Metadata Primary - Title/Description/Canonical", () => {
  const title = "Electric Cars, Solar & Clean Energy | Tesla";
  const baseUrlTesla = "https://www.tesla.com/";
  before(function () {
    // runs once before all tests in the block
    cy.visit(baseUrlTesla);
  });
  /**
   * Title
   */
  it("tesla.com should have correct title", () => {
    cy.title().should("eq", title);
  });
  /**
   * Description
   */
  const description =
    "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.";
  it("tesla.com should have correct description", () => {
    cy.get('head meta[name="description"]').should(
      "have.attr",
      "content",
      description
    );
  });

  /**
   * Canonicals
   */
  it("tesla.com should have correct canonical", () => {
    cy.get('head link[rel="canonical"]').should(
      "have.attr",
      "href",
      baseUrlTesla
    );
  });
  it("tesla.com should have correct canonical equal to location href", () => {
    cy.get('head link[rel="canonical"]').then((canonical) => {
      cy.location().then((loc) => {
        expect(canonical).to.have.attr("href", loc.href);
      });
    });
  });
  it("tesla.com should have correct shortlink", () => {
    cy.get('head link[rel="shortlink"]').should(
      "have.attr",
      "href",
      baseUrlTesla
    );
  });
});
