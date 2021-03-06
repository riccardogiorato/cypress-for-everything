import * as fs from "fs";
const fsPromises = fs.promises;

async function listExamples() {
  try {
    const examplesList = await fsPromises.readdir("examples");
    const matrixExamples = [];
    examplesList.map((exampleFoldername) => {
      matrixExamples.push(exampleFoldername);
    });
    console.log(`::set-output name=matrix::${JSON.stringify(matrixExamples)}`);
  } catch (err) {
    console.error("Error occured while reading examples directory!", err);
  }
}

listExamples();
