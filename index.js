const fs = require("fs");

const readCSV = () => {
  const csvFile = fs.readFileSync("./username.csv", "utf-8");
  console.log(csvFile.split(";"));
};

readCSV();
