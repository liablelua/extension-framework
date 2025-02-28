const Framework = {}; // Initalize Framework Const

Framework.Cast = {
  String: (x) => {
    return String(x);
  },
  Number: (x) => {
    return Number(x);
  },
  Boolean: (x) => {
    return Boolean(x);
  },
  Array: (x) => {
    return [x];
  },
};

Framework.Create = {
  Header: () => {
    return document.createElement("header");
  },
  Text: () => {
    return document.createElement("p");
  },
  Image: () => {
    return document.createElement("img");
  },
  Input: () => {
    return document.createElement("input");
  },
};

Framework.String = {
  Find: (a, b) => {
    return a.search(b);
  },
};

Framework.Wrap = (funct) => {
  funct(); // Run extension.
};

Framework.LoadExtension = (src) => {
  const ext = document.createElement("script");
  ext.src = src;
  document.body.append(ext);
};

const CheckFrameworkLine = (x) => {
  if (Framework.String.Find(x, "iframe")) {
    return false; // Terminate Extension!! We don't need IFrames!!
  }

  if (Framework.String.Find(x, "embed")) {
    return false; // Terminate Extension!! We don't need Embeds!!
  }

  if (Framework.String.Find(x, "document")) {
    return false; // Terminate Extension!! We have a Custom document en-closed safe-based framework.
  }

  return true; // Line is safe C:
};

Framework.LoadExtension("/example-extensions/Converter.js");