describe("Login with Google in Auth0", async function () {
  it("Login with Google", function () {
    cy.loginGoogle();
  });

  it("Login with Google on Auth0", function () {
    cy.loginGoogle();
    cy.visit("https://auth0.com/learn/lock-demo/");
  });
});
