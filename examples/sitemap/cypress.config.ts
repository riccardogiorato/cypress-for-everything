import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.vercel.com",
    supportFile: false,
  },
  fixturesFolder: false,
  reporter: "junit",
  reporterOptions: {
    mochaFile: "../../report/[hash].xml",
    toConsole: true,
  },
  retries: 2,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  blockHosts: ["www.google-analytics.com", "cdn.segment.com", "sentry.io"],
});
