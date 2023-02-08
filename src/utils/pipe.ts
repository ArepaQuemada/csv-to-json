export const pipe =
  (...functions: any) =>
  (args: any) =>
    functions.reduce(
      (result: any, currentFunction: any) => currentFunction(result),
      args
    );
