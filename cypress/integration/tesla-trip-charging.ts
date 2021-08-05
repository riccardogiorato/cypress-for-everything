describe("Tesla Trip", () => {
  const baseUrlTesla = "https://www.tesla.com/";
  it("tesla.com charging page should lead to trips", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit(baseUrlTesla + "charging");
    cy.get(".header-lower").should("have.text", "Stay Charged");
    cy.get("body").type("{pagedown}");
    cy.contains("Plan My Trip").first().click({ force: true });

    cy.url().should("eq", baseUrlTesla + "trips");
    cy.get("h1").should("have.text", "Go Anywhere");
  });
  it("tesla.com charging page should lead to trips", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.intercept({
      method: "POST", // Route all POST requests
      url: "/trips-api/*", // that have a URL that matches '/trips-api/*'
    }).as("getTrips");

    cy.visit(baseUrlTesla + "trips");
    cy.get("h1").should("have.text", "Go Anywhere");

    cy.get("input[placeholder='Enter location']").type("Padova Italy");
    cy.get("#autocomplete > li").should("have.length.above", 0);
    cy.get("#autocomplete > li").first().contains("Padova");
    cy.get("#autocomplete > li").first().click({ force: true });

    cy.wait(2000);

    cy.get("input[placeholder='Enter destination']").type("Tesla Str");
    cy.get("#autocomplete > li").should("have.length.above", 0);
    cy.get("#autocomplete > li").first().contains("Tesla Str");
    cy.get("#autocomplete > li").first().click({ force: true });

    cy.get(".route__btn").click();

    cy.wait(["@getTrips"]);

    cy.get(".route__info > .copy").contains("Est. Gas Savings");

    cy.get(".btn-primary").should("have.text", "Order Model S");
  });

  it("tesla.com trips can visualize the superchargers list and total", () => {
    cy.visit(
      "https://www.tesla.com/trips#/?v=MS_2020_Performance&o=Padua,%20Province%20of%20Padua,%20Italy_Padua%20Padua%20PD@45.4064349,11.8767611&s=&d=Alta,%20Norway_Alta%20Troms%20og%20Finnmark%20fylke%20NO@69.9688853,23.2715873"
    );
  });

  it("tesla.com trips can change veichle type", () => {
    cy.visit(
      "https://www.tesla.com/trips#/?v=MS_2020_Performance&o=Padua,%20Province%20of%20Padua,%20Italy_Padua%20Padua%20PD@45.4064349,11.8767611&s=&d=Tesla%20Str.,%2015537%20Gr%C3%BCnheide%20(Mark),%20Germany_Tesla%20Str.%20Gr%C3%BCnheide%20Gr%C3%BCnheide%20(Mark)@52.390952,13.7911673"
    );
  });
});
