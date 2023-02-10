export const arrayToObject = (array: string[][]) =>
  array
    .map((currentRow, _, originalArray) => {
      return currentRow.reduce((acum, currentValue, index) => {
        const mainRow = originalArray[0];
        if (index >= mainRow.length) return acum;
        return {
          ...acum,
          [mainRow[index].trim()]: currentValue,
        };
      }, {});
    })
    .splice(1);
