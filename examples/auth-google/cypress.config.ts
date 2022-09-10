import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://auth0.com",
  },
  fixturesFolder: false,
  reporter: "junit",
  reporterOptions: {
    mochaFile: "../../report/[hash].xml",
    toConsole: true,
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
});
