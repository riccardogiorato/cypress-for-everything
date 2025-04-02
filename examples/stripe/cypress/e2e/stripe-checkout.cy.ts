describe("Stripe Checkout", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  it("Stripe Checkout test mode works!", () => {
    cy.visit(
      "https://js.stripe.com/v3/embedded-checkout-inner.html?publishableKey=pk_test_51HF0gZCJR1nkic2WnoloCeF2tR8ogJltEb028bXaSr8jDzAM4yKmFxFrbC5JiDYsKhuvqwAmJc75J1NgbrKwFO7I00L4EhhfIF&checkoutSessionId=cs_test_a1zwhUfc7lqU7V2vrPnGlKWI5UIxj6XHRyaHsjp8ty7XGGFNmrss1kXraC&ui_mode=embedded&__isDemoMode=true"
    );
    cy.url().should("contains", "https://js.stripe.com");

    cy.get('[data-testid="card-accordion-item"]').click();

    cy.get("#email").type("SatoshiNakamoto@email.com");
    cy.get("#cardNumber").type("4242424242424242");
    cy.get("#cardCvc").type("123");
    cy.get("#cardExpiry").type(
      "12" + (new Date().getFullYear() + 10).toString().substr(-2)
    );
    cy.get("#billingName").type("Satoshi Nakamoto");

    cy.wait(1000);
    cy.get(".SubmitButton").should(($div) => {
      expect($div.text()).to.include("Pay");
    });
    cy.get(".SubmitButton").click();
    cy.get(".SubmitButton").should(($div) => {
      expect($div.text()).to.include("Processing");
    });
  });
});
