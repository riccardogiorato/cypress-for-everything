describe("Metadata Open Graph / Facebook", () => {
  const baseUrlVercel = "https://vercel.com/";

  beforeEach(function () {
    // runs before each test in the block
    cy.visit(baseUrlVercel);
  });

  /**
   * Open Graph Metadata
   */
  it("vercel.com should have correct og:title", () => {
    cy.get('head meta[property="og:title"]').should(
      "have.attr",
      "content",
      "Vercel: Build and deploy the best web experiences with the Frontend Cloud – Vercel"
    );
  });

  const description =
    "Vercel's Frontend Cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized web.";
  it("vercel.com should have correct og:description", () => {
    cy.get('head meta[property="og:description"]').should(
      "have.attr",
      "content",
      description
    );
  });

  it("vercel.com should have correct og:site_name", () => {
    cy.get('head meta[property="og:site_name"]').should(
      "have.attr",
      "content",
      "Vercel"
    );
  });
  it("vercel.com should have correct og:type", () => {
    cy.get('head meta[property="og:type"]').should(
      "have.attr",
      "content",
      "website"
    );
  });
  it("vercel.com should have correct og:url", () => {
    cy.get('head meta[property="og:url"]').should(
      "have.attr",
      "content",
      "https://vercel.com/home"
    );
  });
  it("vercel.com should have correct og:locale", () => {
    cy.get('head meta[property="og:locale"]').should(
      "have.attr",
      "content",
      "en_US"
    );
  });
});
