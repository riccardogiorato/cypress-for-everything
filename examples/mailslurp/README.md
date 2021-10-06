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

2. Create the Cypress Support file with this code:

- [cypress/support/index.js](cypress/support/index.js)

3. Write some tests to test out the plugin: [tesla-updates.ts](/cypress/integration/tesla-updates.ts)

### Support and Sponsors

<!-- <div align="center" valign="top">
    <a href="https://www.mailslurp.com/" target="_blank">
        <img width="128px" src="../../assets/mailslurp.png" alt="MailSlurp Logo" />
        <br />
        <div>MailSlurp</div>
    </a>
    <br />
    <sub>
        🥉 Supporter <br />
        ☁️ Starter Account to let us build more tests!
    </sub>
</div> -->
