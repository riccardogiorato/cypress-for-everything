import { gmailCheck, GmailCheckParam } from "./gmailCheck";

require("ts-node").register({
  transpileOnly: true,
});

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on("task", {
    async gmailCheck(args: GmailCheckParam) {
      return await gmailCheck(args);
    },
  });
  return config;
};
