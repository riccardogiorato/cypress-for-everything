import { StructuredDataResult } from "../plugins/structured-data-testing-tool";

describe("Apple Structured Data", () => {
  it("apple homepage has WebPage, Organization and Website ", () => {
    cy.visit("https://www.apple.com");
    cy.task("structuredData", {
      url: "https://www.apple.com",
      schemas: ["WebPage", "Organization", "WebSite"],
    }).then((result) => {
      const resultSD = result as StructuredDataResult;
      expect(resultSD.passed.length).to.equal(3);
      expect(resultSD.passed[0].schema).to.equal("WebPage");
      expect(resultSD.passed[1].schema).to.equal("Organization");
      expect(resultSD.passed[2].schema).to.equal("WebSite");
    });
  });
  it("apple iPhone 16 shop page has BreadcrumbList, Product and FAQPage ", () => {
    cy.task("structuredData", {
      url: "https://www.apple.com/shop/buy-iphone/iphone-16",
      schemas: ["BreadcrumbList", "Product", "FAQPage"],
    }).then((result) => {
      const resultSD = result as StructuredDataResult;
      expect(resultSD.passed.length).to.equal(3);
      expect(resultSD.passed[0].schema).to.equal("BreadcrumbList");
      expect(resultSD.passed[1].schema).to.equal("Product");
      expect(resultSD.passed[2].schema).to.equal("FAQPage");
    });
  });
  it("apple latest newsroom article has NewsArticle and BreadcrumbList ", () => {
    cy.visit("https://www.apple.com/newsroom/");

    cy.get(".section-tiles li:first-child a").first().click();
    cy.location().then((location) => {
      cy.task("structuredData", {
        url: location.href,
        schemas: ["NewsArticle", "BreadcrumbList"],
      }).then((result) => {
        const resultSD = result as StructuredDataResult;
        console.log(resultSD.passed.length);
        expect(resultSD.passed.length).to.equal(2);
        expect(resultSD.passed[0].schema).to.equal("NewsArticle");
        expect(resultSD.passed[1].schema).to.equal("BreadcrumbList");
      });
    });
  });
});
