import "cypress-plugin-stripe-elements";

describe("Stripe Elements", () => {
  it("Stripe Elements Demo works!", () => {
    cy.visit("https://stripe-payments-demo.appspot.com/");

    cy.get("#generate").click();

    cy.get("#card-element").within(() => {
      cy.fillElementsInput("cardNumber", "4242424242424242");
      cy.fillElementsInput("cardCvc", "123");
      cy.fillElementsInput(
        "cardExpiry",
        "12" + (new Date().getFullYear() + 10).toString().substr(-2)
      );
    });

    cy.wait(1000);
    cy.get(".payment-button").should(($div) => {
      expect($div.text()).to.include("Pay");
    });
    cy.get(".payment-button").click();
    cy.get(".payment-button").should(($div) => {
      expect($div.text()).to.include("Processing");
    });
    cy.get("#confirmation > .success").should(($div) => {
      expect($div).to.exist;
      expect($div.text()).to.include("Thanks for your order!");
    });
  });
});
