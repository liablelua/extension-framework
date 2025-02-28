/*
    
    Framework: Converter.js
    https://github.com/liablelua/extension-framework/
    
*/

Framework.Wrap(function () {
  function showDiff(c) {
    return typeof c == "string"
      ? '"' + c + '"'
      : typeof c == "number"
        ? "int: " + c
        : "boolean: " + c;
  }

  const String = Framework.Cast.String(1000);
  const Number = Framework.Cast.Number("2");
  const Bool = Framework.Cast.Boolean("true");

  console.log(showDiff(String));
  console.log(showDiff(Number));
  console.log(showDiff(Bool));
});
