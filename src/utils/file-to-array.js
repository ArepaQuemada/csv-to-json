const convertFileToArray = (file) =>
  file
    .trim()
    .split(/\n/g)
    .reduce((acum, currentValue) => {
      return [...acum, currentValue.split(";")];
    }, []);

module.exports = convertFileToArray;
