import fs from "fs";
import { pipe, arrayToObject, convertFileToArray, makeJson } from "./utils";

/**
 * TODO
 * Implementar un backend que reciba el csv y devuelva el formato JSON
 * Formatearlo añadir opción como hash
 * agregar tests
 */

const readCSV = (path = "./username.csv") => {
  const csvFile = fs.readFileSync(path, "utf-8");
  const jsonString = pipe(convertFileToArray, arrayToObject, makeJson)(csvFile);
  console.log("Converted to json ", jsonString);
  fs.writeFileSync("csv-converted.converted.json", jsonString);
};

readCSV();
