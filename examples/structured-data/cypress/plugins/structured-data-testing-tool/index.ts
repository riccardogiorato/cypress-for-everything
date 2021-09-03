const { structuredDataTest } = require("structured-data-testing-tool");
const {
  Google,
  Twitter,
  Facebook,
} = require("structured-data-testing-tool/presets");

export interface StructuredDataParam {
  url: string;
  schemas?: [string];
  presets?: ["Google", "Twitter", "Facebook", "SocialMedia"];
}

export interface StructuredDataResult {
  failed: Array<any>;
  groups: Array<any>;
  optional: Array<any>;
  options: Array<any>;
  passed: Array<any>;
  schemas: Array<any>;
  skipped: Array<any>;
  structuredData: Array<any>;
  tests: Array<any>;
  warnings: Array<any>;
}

export const structuredData = async ({
  url,
  schemas,
  presets,
}: StructuredDataParam): Promise<StructuredDataResult> => {
  const result = await structuredDataTest(url, {
    schemas: schemas,
    presets: presets,
    auto: false,
  }).catch((err) => {
    console.warn(err);
    return {};
  });
  return result;
};
