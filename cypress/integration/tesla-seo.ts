describe("Tesla SEO", () => {
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
  it("tesla.com should have correct og:title", () => {
    cy.get('head meta[property="og:title"]').should(
      "have.attr",
      "content",
      title
    );
  });
  it("tesla.com should have correct twitter:title", () => {
    cy.get('head meta[name="twitter:title"]').should(
      "have.attr",
      "content",
      title
    );
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
  it("tesla.com should have correct og:description", () => {
    cy.get('head meta[property="og:description"]').should(
      "have.attr",
      "content",
      description
    );
  });
  it("tesla.com should have correct twitter:description", () => {
    cy.get('head meta[name="twitter:description"]').should(
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

  /**
   * Twitter Metadata
   */
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

  /**
   * Open Graph Metadata
   */
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
