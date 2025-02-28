const Framework = {}; // Initalize Framework Const

Framework.Cast = {
  toString: (x) => {
    return toString(x);
  },
  toNumber: (x) => {
    return Number(x);
  },
  toBoolean: (x) => {
    return Boolean(x);
  },
  toArray: (x) => {
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
};

Framework.String = {
  Find: (a, b) => {
    return a.search(b);
  },
};

const CheckFrameworkLine = (x) => {
  if (Framework.String.Find(x, "iframe")) {
    return false; // Terminate Extension!! We don't need IFrames!!
  }

  if (Framework.String.Find(x, "embed")) {
    return false; // Terminate Extension!! We don't need Embeds!!
  }

  return true; // Line is safe C:
};
