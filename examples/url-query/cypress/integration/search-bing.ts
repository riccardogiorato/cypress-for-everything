describe("Bing Search with Url Search parameters", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  it("should display different url query parameters", () => {
    cy.visit("https://bing.com/");
    const searchedText = "testing bing search";

    cy.get("#bnp_btn_accept").click();

    cy.get("#sb_form_q").type(searchedText);
    cy.get("#search_icon").click();

    cy.url().should("include", "q=");
    cy.url().should("include", "qs=n");

    cy.location().then((location) => {
      // here we can access the location searchParams directly with the URL constructor
      const searchQuery = new URL(location.href).searchParams.get("q");
      // we then check that the searched text is in the query in the URL
      expect(searchQuery).to.equal(searchedText);
      // for the final confirmation we also check that the input field has the same value
      cy.get("#sb_form_q").should("have.value", searchedText);
    });
  });
});
