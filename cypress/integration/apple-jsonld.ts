describe("Apple Structured Data, Schema.org or JSON-LD", () => {
  it("apple homepage has WebPage, Organization and Website ", () => {
    cy.visit("https://www.apple.com");
    cy.task("structuredData", {
      url: "https://www.apple.com",
      schemas: ["WebPage", "Organization", "WebSite"],
    }).then((result) => {
      expect(result.passed.length).to.equal(3);
    });
  });
  it("apple iphone 12 has BreadcrumbList and Product ", () => {
    cy.visit("https://www.apple.com/iphone-12");
    cy.task("structuredData", {
      url: "https://www.apple.com/iphone-12",
      schemas: ["BreadcrumbList", "Product"],
    }).then((result) => {
      expect(result.passed.length).to.equal(2);
      expect(result.passed[0].schema).to.equal("BreadcrumbList");
      expect(result.passed[1].schema).to.equal("Product");
    });
  });
  it("apple iphone 12 shop page has BreadcrumbList, Product and FAQPage ", () => {
    cy.task("structuredData", {
      url: "https://www.apple.com/shop/buy-iphone/iphone-12",
      schemas: ["BreadcrumbList", "Product", "FAQPage"],
    }).then((result) => {
      expect(result.passed.length).to.equal(3);
      expect(result.passed[0].schema).to.equal("BreadcrumbList");
      expect(result.passed[1].schema).to.equal("Product");
      expect(result.passed[2].schema).to.equal("FAQPage");
    });
  });
  it("apple latest newsroom article has NewsArticle and BreadcrumbList ", () => {
    cy.visit("https://www.apple.com/newsroom/");
    cy.get("#everydayfeed > .section-content > .section-tiles")
      .find("li")
      .first()
      .click();
    cy.location().then((location) => {
      cy.task("structuredData", {
        url: location.href,
        schemas: ["NewsArticle", "BreadcrumbList"],
      }).then((result) => {
        expect(result.passed.length).to.equal(2);
        expect(result.passed[0].schema).to.equal("NewsArticle");
        expect(result.passed[1].schema).to.equal("BreadcrumbList");
      });
    });
  });
});
