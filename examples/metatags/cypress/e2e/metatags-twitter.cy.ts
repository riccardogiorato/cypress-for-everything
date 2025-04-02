describe("Metadata Twitter", () => {
  const title =
    "Vercel: Build and deploy the best web experiences with the Frontend Cloud";
  const baseUrlVercel = "https://vercel.com/";
  beforeEach(function () {
    // runs once before all tests in the block
    cy.visit(baseUrlVercel);
  });
  /**
   * Twitter Metadata
   */
  it("vercel.com should have correct twitter:title", () => {
    cy.get('head meta[name="twitter:title"]').should(
      "have.attr",
      "content",
      title
    );
  });

  const description =
    "Vercel's Frontend Cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized web.";
  it("vercel.com should have correct twitter:description", () => {
    cy.get('head meta[name="twitter:description"]').should(
      "have.attr",
      "content",
      description
    );
  });

  it("vercel.com should have correct twitter:card", () => {
    cy.get('head meta[name="twitter:card"]').should(
      "have.attr",
      "content",
      "summary_large_image"
    );
  });

  it("vercel.com should have correct twitter:image:title", () => {
    cy.get('head meta[name="twitter:image:title"]').should(
      "have.attr",
      "content",
      "Vercel OG Image"
    );
  });
});
