import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.apple.com",
    supportFile: false,
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
});
