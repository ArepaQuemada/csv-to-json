export const convertFileToArray = (file: any) =>
  file
    .trim()
    .split(/\n/g)
    .reduce((acum: any, currentValue: any) => {
      return [...acum, currentValue.split(";")];
    }, []);
