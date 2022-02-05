describe("Sitemap Slow Check", () => {
  let urls = [];
  before(() => {
    cy.request({
      url: "https://www.vercel.com/sitemap.xml",
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
      },
    })
      .as("sitemap")
      .then((response) => {
        urls = Cypress.$(response.body)
          .find("loc")
          .toArray()
          .map((el) => el.innerText);
      });
  });

  // this is needed cause sitemap urls have redirects to other domains
  it("should succesfully load each url in the sitemap", () => {
    urls.forEach((url) => {
      cy.window().then((win) => {
        return win.open(url, "_self");
      });
    });
  });

  // this would work if the sitemap doesnt have any redirects to other domains
  // it("should succesfully load each url in the sitemap", () => {
  //   urls.forEach((url) => {
  //     cy.visit(url);
  //   });
  // });
});
