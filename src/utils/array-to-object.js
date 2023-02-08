const arrayToObject = (array) =>
  array
    .map((currentRow, _, originalArray) => {
      return currentRow.reduce((acum, currentValue, index) => {
        return {
          ...acum,
          [originalArray[0][index].trim()]: currentValue,
        };
      }, {});
    })
    .splice(1);

module.exports = arrayToObject;
