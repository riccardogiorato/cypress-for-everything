describe("Tesla HTTP requests and redirects", () => {
  const baseUrlTesla = "https://www.tesla.com/";

  const urlHttp = "http://tesla.com";
  it(urlHttp + " end location", () => {
    cy.visit(urlHttp);
    cy.url().should("eq", baseUrlTesla);
  });
  it(urlHttp + " redirect", () => {
    cy.request({
      url: urlHttp,
      followRedirect: false, // turn off following redirects
    }).then((resp) => {
      // redirect status code is 301
      expect(resp.status).to.eq(301);
      expect(resp.redirectedToUrl).to.eq("http://www.tesla.com/");
    });
  });

  const urlHttpWww = "http://www.tesla.com/";
  it(urlHttpWww + " end location", () => {
    cy.visit(urlHttpWww);
    cy.wait(500);
    cy.url().should("eq", baseUrlTesla);
  });
  it(urlHttpWww + " redirect", () => {
    cy.request({
      url: urlHttpWww,
      followRedirect: false,
    }).then((resp) => {
      expect(resp.status).to.eq(301);
      expect(resp.redirectedToUrl).to.eq(baseUrlTesla);
    });
  });

  const urlHttps = "https://tesla.com/";
  it(urlHttps + " end location", () => {
    cy.visit(urlHttps);
    cy.url().should("eq", baseUrlTesla);
  });
  it(urlHttps + " redirect", () => {
    cy.request({
      url: urlHttps,
      followRedirect: false,
    }).then((resp) => {
      expect(resp.status).to.eq(301);
      expect(resp.redirectedToUrl).to.eq(baseUrlTesla);
    });
  });

  const urlHttpsWww = "https://www.tesla.com/";
  it(urlHttpsWww + " end location", () => {
    cy.visit(urlHttpsWww);
    cy.url().should("eq", baseUrlTesla);
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

  const url404test = "https://www.tesla.com/not-a-real-page";
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
    cy.get(".error-code").should("contain", "404");
    cy.get(".error-text").should("contain", "Page not found");
  });
});
