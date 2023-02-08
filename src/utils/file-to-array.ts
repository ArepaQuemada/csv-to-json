export const convertFileToArray = (file: string) =>
  file
    .trim()
    .split(/\n/g)
    .reduce<string[][]>(
      (acum, currentValue) => [...acum, currentValue.split(";")],
      []
    );
