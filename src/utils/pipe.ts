export const pipe =
  <T extends Function[]>(...functions: T) =>
  <K>(args: K) =>
    functions.reduce<K>(
      (result, currentFunction) => currentFunction(result),
      args
    );
