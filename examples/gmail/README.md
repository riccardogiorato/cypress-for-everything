# GMAIL

If you are looking to test out emails with cypress:
1.  for free without having to use strange Email Providers
2.  with as little code as possible
You just found the solution to this problem!

## Examples
- [slack-new-account.ts](cypress/integration/slack-new-account.ts)

## How does it work? 

We will use a simple NPM package called "gmail-tester", it uses Gmail API under the hood. 

The main issues with this package are:
- you have to create the "credentials.json" and "token.json" files using the "gmail-tester" [official guide](https://github.com/levz0r/gmail-tester#how-to-get-credentialsjson).
- you have to renew the "token.json" file at least every 30 days.
- create a cypress task "plugin" to call "gmail-tester" from a cypress test.

## Setup

1. Install the package "gmail-tester" with
```
yarn add gmail-tester
```

2. Configure the required files for "gmail-tester" following this guide: https://github.com/levz0r/gmail-tester#how-to-get-credentialsjson

3. Create these Cypress Plugin files with these codes:
- [cypress/plugins/gmailCheck.ts](cypress/plugins/gmailCheck.ts)
- [cypress/plugins/refreshGmailToken.ts](cypress/plugins/refreshGmailToken.ts)
- [cypress/plugins/index.ts](cypress/plugins/index.ts)

4. Write a simple test to check if the plugin is working: [slack-new-account.ts](cypress/integration/slack-new-account.ts)