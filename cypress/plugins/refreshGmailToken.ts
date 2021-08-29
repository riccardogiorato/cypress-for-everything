const path = require("path");
const gmail = require("gmail-tester");

(async function () {
  console.log("Refreshed the gmail token!");
  await gmail.refresh_access_token(
    path.resolve(__dirname, "credentials.json"),
    path.resolve(__dirname, "token.json")
  );
})();
