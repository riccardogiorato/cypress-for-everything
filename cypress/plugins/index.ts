import { gmailCheck, GmailCheckParam } from "./gmailCheck";
import {
  structuredData,
  StructuredDataParam,
  StructuredDataResult,
} from "./structuredData";

require("ts-node").register({
  transpileOnly: true,
});

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  config.env.EMAIL_PRE = process.env.EMAIL_PRE;
  config.env.EMAIL_POST = process.env.EMAIL_POST;

  on("task", {
    async structuredData(
      param: StructuredDataParam
    ): Promise<StructuredDataResult> {
      return await structuredData(param);
    },
  });

  on("task", {
    async gmailCheck(args: GmailCheckParam) {
      return await gmailCheck(args);
    },
  });
  return config;
};
