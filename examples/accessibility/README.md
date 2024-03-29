# accessibility A11Y

## Examples

- [cypress-axe](cypress/e2e/axe.cy.ts)

## How does it work?

Test accessibility by using axe-core under the hood with "cypress-axe".
You can play with Axe directly with Chrome using their browser extension, you can download it: [axe-core](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)

## Setup

1. Install the packages "axe-core" & "cypress-axe" with

```
yarn add axe-core cypress-axe
```

1. Write a simple test to check if the plugin is working: [cypress-axe](cypress/e2e/axe.cy.ts) ✨

Remember to add this into the file:

```
import 'cypress-axe'
```

Always remember to use first "cy.visit" then "cy.injectAxe" to make sure the axe-core is loaded and finally "cy.checkA11y" to check the accessibility.

```typescript
it("A11Y on riccardogiorato.com", function () {
  cy.visit("https://www.riccardogiorato.com/");
  cy.injectAxe();
  cy.checkA11y(
    null,
    null,
    (violations) => {
      expect(violations.length).to.be.equal(1);
    },
    true
  );
});
```
