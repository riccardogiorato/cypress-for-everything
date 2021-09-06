const path = require("path");
const gmail = require("gmail-tester");

export interface GmailCheckParam {
  from: string;
  to: string;
  subject: string;
}

//  node ..\..\node_modules\gmail-tester\init.js ./credentials.json token.json yourGmailEmail@gmail.com

export const gmailCheck = async ({
  from,
  to,
  subject,
}: GmailCheckParam): Promise<void> => {
  const email = await gmail.check_inbox(
    path.resolve(__dirname, "credentials.json"), // credentials.json is inside plugins/ directory.
    path.resolve(__dirname, "token.json"), // token.json is inside plugins/ directory.
    {
      subject: subject,
      from: from,
      to: to,
      wait_time_sec: 5, // Poll interval (in seconds).
      max_wait_time_sec: 120, // Maximum poll time (in seconds), after which we'll giveup.
      include_body: true,
    }
  );
  return email;
};
