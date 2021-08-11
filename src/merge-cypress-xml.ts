import * as fs from "fs";
import { execSync } from "child_process";
import * as convert from "xml-js";

const reportDir = "report";

const reportFilenames = fs.readdirSync(reportDir);

reportFilenames.forEach((reportFilename) => {
  const reportFilePath = "./" + reportDir + "/" + reportFilename;
  console.log("✨ merge report", reportFilename);
  const reportXml = fs.readFileSync(reportFilePath, "utf8");

  const reportJson = JSON.parse(
    convert.xml2json(reportXml, { ignoreComment: true, compact: true })
  );
  const cypressTestsuites = reportJson.testsuites.testsuite;
  if (cypressTestsuites && cypressTestsuites.length > 1) {
    reportJson.testsuites.testsuite.shift();
  }
  const newReportXml = convert.json2xml(JSON.stringify(reportJson), {
    compact: true,
    ignoreComment: true,
  });
  fs.writeFileSync(reportFilePath, newReportXml);
});

execSync("jrm ./report.xml ./" + reportDir + "/*.xml");
