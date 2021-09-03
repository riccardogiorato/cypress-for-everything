import {
  structuredData,
  StructuredDataParam,
  StructuredDataResult,
} from "./structured-data-testing-tool";

require("ts-node").register({
  transpileOnly: true,
});

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on("task", {
    async structuredData(
      param: StructuredDataParam
    ): Promise<StructuredDataResult> {
      return await structuredData(param);
    },
  });
  return config;
};
