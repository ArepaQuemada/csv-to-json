const fs = require("fs");
const convertFileToArray = require("./utils/file-to-array");
const pipe = require("./utils/pipe");
const arrayToObject = require("./utils/array-to-object");

const readCSV = (path = "./username.csv") => {
  const csvFile = fs.readFileSync(path, "utf-8");
  const csvMatrix = pipe(convertFileToArray, arrayToObject)(csvFile);
  console.log(csvMatrix);
  console.log(JSON.stringify(csvMatrix));
};

readCSV();
