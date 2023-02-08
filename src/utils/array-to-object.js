const arrayToObject = (array) =>
  array.slice(1).map((currentRow) => {
    return currentRow.reduce(
      (acum, currentValue, index, currentArray) => ({
        ...acum,
        [currentArray[0][index]]: currentValue,
      }),
      {}
    );
  });

module.exports = arrayToObject;
