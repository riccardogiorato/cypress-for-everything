# Mailslurp

Testing Emails with Mailslurp is super easy and can be done in seconds using their APIs or SDKs. Their pricing also offer a free version to get started to make some examples and first tests.

## Examples
- [tesla-updates.ts](cypress/integration/tesla-updates.ts)

## How does it work? 

To check email workflows with Mailslurp we will use their official cypress plugin:
1. Install the package "cypress-mailslurp" with
```
yarn add cypress-mailslurp
```
1. Create the Cypress Support file with this code:
- [cypress/support/index.js](cypress/support/index.js)

1. Write some tests to test out the plugin: [tesla-updates.ts](/cypress/integration/tesla-updates.ts)