import fs from "fs";
import { pipe, arrayToObject, convertFileToArray, makeJson } from "./utils";

/**
 * TODO
 * MIGRAR A TYPESCRIPT
 * Implementar un backend que reciba el csv y devuelva el formato JSON
 */

const readCSV = (path = "./username.csv") => {
  const csvFile = fs.readFileSync(path, "utf-8");
  const jsonString = pipe(convertFileToArray, arrayToObject, makeJson)(csvFile);
  fs.writeFileSync("csv-converted.converted.json", jsonString);
};

readCSV();
