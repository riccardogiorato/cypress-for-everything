import { defineConfig } from "cypress";
import {
  structuredData,
  StructuredDataParam,
  StructuredDataResult,
} from "./cypress/plugins/structured-data-testing-tool";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.apple.com",
    supportFile: false,
    setupNodeEvents(on, config) {
      // bind to the event we care about
      on("task", {
        async structuredData(
          param: StructuredDataParam
        ): Promise<StructuredDataResult> {
          return await structuredData(param);
        },
      });
    },
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
