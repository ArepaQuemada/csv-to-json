const fs = require("fs");
const convertFileToArray = require("./utils/file-to-array");
const pipe = require("./utils/pipe");
const arrayToObject = require("./utils/array-to-object");
const makeJson = require("./utils/make-json");

/**
 * TODO
 * Implementar un backend que reciba el csv y devuelva el formato JSON
 */

const readCSV = (path = "./username.csv") => {
  const csvFile = fs.readFileSync(path, "utf-8");
  const jsonString = pipe(convertFileToArray, arrayToObject, makeJson)(csvFile);
  fs.writeFileSync("csv-converted.converted.json", jsonString);
};

readCSV();
