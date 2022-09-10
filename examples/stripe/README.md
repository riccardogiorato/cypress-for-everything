# Stripe

Stripe is probably the best way to handle credit card payments in your app!
Stripe is also the most popular payment processing service in the world.

That's why we will test their features, Checkout, API and Elements here!

## Stripe Checkout

With Stripe Checkout you can process credit card payments in your app without adding any package or SDK you just go to the remotly hosted checkout page. In this page the code to run a cypress test is simpler than using stripe elements cause you just need to interact with the different elements.

You won't need to look at iframes or use an external plugin.

```javascript
cy.url().should("contains", "https://checkout.stripe.com/pay/");

cy.get("#email").type("SatoshiNakamoto@email.com");
cy.get("#cardNumber").type("4242424242424242");
cy.get("#cardCvc").type("123");
cy.get("#cardExpiry").type(
  "12" + (new Date().getFullYear() + 10).toString().substr(-2)
);
```

You can find the complete example code here:

- [Stripe Checkout Cypress Example](./cypress/e2e/stripe-checkout.cy.ts) ✨

## Stripe Elements

We used `cypress-plugin-stripe-elements` plugin to interact with Stripe Elements, official docs here: https://github.com/dbalatero/cypress-plugin-stripe-elements#readme

Using this Plugin you will prevent yourself from writing a lot of code to interact with Stripe Elements, finding the Stripe iframe, trying to access children elements of itself.

1. Add the Cypress Plugin to your project:

```
yarn add cypress-plugin-stripe-elements
```

2. Import the plugin file in any of the tests where you need to test Stripe:

```javascript
import "cypress-plugin-stripe-elements";
```

3. Finally write some code to interact with Stripe Elements and the job is done!

```javascript
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
```

You can find the complete example code here:

- [Stripe Elements Cypress Example](./cypress/e2e/stripe-elements.cy.ts) ✨
