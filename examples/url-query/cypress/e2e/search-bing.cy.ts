describe("Bing Search with Url Search parameters", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  it("should display different url query parameters", () => {
    cy.visit("https://bing.com/");
    const searchedText = "testing bing search";

    cy.get("body").then((body) => {
      if (body.find("#bnp_container").length > 0) {
        cy.log("Cookie banner found in the page! Close it!");
        cy.get("#bnp_btn_accept").click();
      } else {
        cy.log("No cookie banner found in the page");
      }
    });

    cy.get("#sb_form_q").type(searchedText + "{enter}");

    cy.url().should("include", "q=");
    cy.url().should("include", "qs=n");

    cy.location().then((location) => {
      cy.get("body").then((body) => {
        if (body.find("#bnp_container").length > 0) {
          cy.get("#bnp_btn_accept").click();
        } else {
          cy.log("No cookie banner found in the page");
        }
      });

      // here we can access the location searchParams directly with the URL constructor
      const searchQuery = new URL(location.href).searchParams.get("q");
      // we then check that the searched text is in the query in the URL
      expect(searchQuery).to.equal(searchedText);
      // for the final confirmation we also check that the input field has the same value
      cy.get("#sb_form_q").should("have.value", searchedText);
    });
  });
});
