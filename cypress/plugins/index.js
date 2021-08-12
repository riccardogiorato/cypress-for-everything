const { structuredDataTest } = require("structured-data-testing-tool");
const {
  Google,
  Twitter,
  Facebook,
} = require("structured-data-testing-tool/presets");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on("task", {
    async structuredData({ url, schemas = [], presets = [] }) {
      const result = await structuredDataTest(url, {
        schemas: schemas,
        presets: presets,
        auto: false,
      }).catch((err) => {
        console.warn(err);
        return {};
      });
      return result;
    },
  });
};
