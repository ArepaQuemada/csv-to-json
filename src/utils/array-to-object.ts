export const arrayToObject = (array: any) =>
  array
    .map((currentRow: any, _: any, originalArray: any) => {
      return currentRow.reduce((acum: any, currentValue: any, index: any) => {
        return {
          ...acum,
          [originalArray[0][index].trim()]: currentValue,
        };
      }, {});
    })
    .splice(1);
