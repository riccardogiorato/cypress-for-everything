describe("Cypress.io HTTP requests and redirects", () => {
  const baseUrlWebsite = "https://www.cypress.io/";
  const urlHttp = "http://cypress.io";
  it(urlHttp + " redirect failed", () => {
    cy.request({
      url: urlHttp,
      followRedirect: false,
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(301);
      expect(resp.redirectedToUrl).to.eq("https://cypress.io/");
    });
  });

  const urlHttpWww = "http://www.cypress.io/";
  it(urlHttpWww + " end location", () => {
    cy.visit(urlHttpWww);
    cy.url().should("eq", "https://www.cypress.io/");
  });
  it(urlHttpWww + " redirect", () => {
    cy.request({
      url: urlHttpWww,
      followRedirect: false,
    }).then((resp) => {
      expect(resp.status).to.eq(301);
      expect(resp.redirectedToUrl).to.eq("https://www.cypress.io/");
    });
  });

  const urlHttps = "https://cypress.io/";
  it(urlHttps + " end location", () => {
    cy.visit(urlHttps);
    cy.url().should("eq", baseUrlWebsite);
  });
  it(urlHttps + " redirect", () => {
    cy.request({
      url: urlHttps,
      followRedirect: false,
    }).then((resp) => {
      expect(resp.status).to.eq(301);
      expect(resp.redirectedToUrl).to.eq(baseUrlWebsite);
    });
  });

  const urlHttpsWww = "https://www.cypress.io/";
  it(urlHttpsWww + " end location", () => {
    cy.visit(urlHttpsWww);
    cy.url().should("eq", baseUrlWebsite);
  });
  it("200 homepage response", () => {
    cy.request({
      url: urlHttpsWww,
      followRedirect: false,
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.redirectedToUrl).to.eq(undefined);
    });
  });

  const url404test = "https://www.cypress.io/not-a-real-page";
  it("404 'not found' response", () => {
    cy.request({
      url: url404test,
      followRedirect: false,
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(404);
      expect(resp.redirectedToUrl).to.eq(undefined);
    });
    cy.visit(url404test, { failOnStatusCode: false });
    cy.get("body").should("contain", "Page Not Found");
  });
});
