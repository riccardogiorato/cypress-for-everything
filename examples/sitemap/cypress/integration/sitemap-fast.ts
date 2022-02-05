describe("Sitemap Fast Check", () => {
  let urls = [];
  before(() => {
    cy.request({
      url: "https://www.vercel.com/sitemap.xml",
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
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

  it("should succesfully load each url in the sitemap", () => {
    urls.forEach((url) => {
      cy.request({
        url: url,
        headers: {
          "Content-Type": "text/html",
          accept: "*/*",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        },
      }).then((resp) => {
        expect(resp.status).to.eq(200);
      });
    });
  });
});
