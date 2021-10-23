describe("'Brave Search' Search with Url Search parameters", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  it("should display different url query parameters", () => {
    cy.visit("https://search.brave.com/", {
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
      },
    });
    const searchedText = "testing brave new search engine";

    cy.get("#searchbox").type(searchedText);
    cy.get("#submit-button").click();

    cy.url().should("include", "q=");
    cy.url().should("include", "source=web");

    cy.location().then((location) => {
      // here we can access the location searchParams directly with the URL constructor
      const searchQuery = new URL(location.href).searchParams.get("q");
      // we then check that the searched text is in the query in the URL
      expect(searchQuery).to.equal(searchedText);
      // for the final confirmation we also check that the input field has the same value
      cy.get("#searchbox").should("have.value", searchedText);
    });
  });
});
