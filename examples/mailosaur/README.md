# mailosaur

Testing Emails with Mailosaur is super simple with their cypress plugin!
Their pricing also offer a free version to get started with!

## Examples

- [slack-new-account.ts](cypress/integration/slack-new-account.ts)

## How does it work?

1. Install the package "cypress-mailosaur" with

```
yarn add cypress-mailosaur
```

2. Create the Cypress Support file with this code:

```
require("cypress-mailosaur");
```

- [cypress/support/index.ts](cypress/support/index.ts)

3. Write some tests to test out the plugin: [slack-new-account.ts](cypress/integration/slack-new-account.ts)

**Remember to set the `CYPRESS_MAILOSAUR_API_KEY` environment variable to your Mailosaur API key.**

### Support and Sponsors

<div align="center" valign="top">
    <a href="https://www.mailosaur.com/" target="_blank">
        <img width="128px" src="../../assets/mailosaur.png" alt="Mailosaur Logo" />
        <br />
        <div>Mailosaur</div>
    </a>
    <br />
    <sub>
        🥇 Supporter <br />
        ☁️ Starter plan to let us build more tests!
    </sub>
</div>
