describe("Metadata Primary - Title/Description/Canonical", () => {
  const title =
    "Vercel: Build and deploy the best web experiences with the Frontend Cloud";
  const baseUrlVercel = "https://vercel.com";
  beforeEach(function () {
    // runs once before all tests in the block
    cy.visit(baseUrlVercel);
  });
  /**
   * Title
   */
  it("vercel.com should have correct title", () => {
    cy.title().should("eq", title);
  });
  /**
   * Description
   */
  const description =
    "Vercel's Frontend Cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized web.";
  it("vercel.com should have correct description", () => {
    cy.get('head meta[name="description"]').should(
      "have.attr",
      "content",
      description
    );
  });

  /**
   * Canonicals
   */
  it("vercel.com should have correct canonical", () => {
    cy.get('head link[rel="canonical"]').should(
      "have.attr",
      "href",
      baseUrlVercel
    );
  });
});
