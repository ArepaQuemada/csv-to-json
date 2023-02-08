const pipe =
  (...functions) =>
  (arguments) =>
    functions.reduce(
      (result, currentFunction) => currentFunction(result),
      arguments
    );

module.exports = pipe;
