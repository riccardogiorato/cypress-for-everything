const path = require("path");
const gmail = require("gmail-tester");
const { execSync } = require("child_process");

(async function () {
  console.log("Refreshed the gmail token!");
  // Download Config from S3 📥
  execSync("aws s3 sync s3://cypress-for-everything ./");

  await gmail.refresh_access_token(
    path.resolve(__dirname, "credentials.json"),
    path.resolve(__dirname, "token.json")
  );

  // Upload New Config to S3 📤
  execSync(
    'aws s3 sync ./cypress/plugins s3://cypress-for-everything/cypress/plugins --exclude "*.ts" --include "*.json'
  );
})();
