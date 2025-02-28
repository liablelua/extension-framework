const Framework = {}; // Initalize Framework Const
var Styles = [];
var STRICT_MODE = true;

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
  Divider: () => {
    return document.createElement("div");
  },
  Button: () => {
    return document.createElement("button");
  }
};

Framework.AppendBody = (x) => {
  document.body.append(x);
};

Framework.Append = (a, b) => {
  a.append(b);
};

Framework.Strict = (x) => {
  STRICT_MODE = x;
}

Framework.JavaScript = (x) => {
  if (STRICT_MODE) return;
  eval(x);
}

const refreshStyles = () => {
  const existingStyle = document.getElementById("framework-styles");
  if (existingStyle !== null) existingStyle.remove();

  const styleElement = document.createElement("style");
  styleElement.id = "framework-styles";

  let styleText = "";
  for (let i = 0; i < Styles.length; i++) {
    styleText += Styles[i];
  }

  styleElement.textContent = styleText;
  document.head.appendChild(styleElement);
};

Framework.Style = (A, B, C) => {
  Styles.push(A + " {" + B + ": " + C + ";}");
  refreshStyles();
};

Framework.String = {
  Find: (a, b) => {
    return a.search(b);
  },
};

Framework.Wrap = (funct) => {
  funct(); // Run extension.
};

function getFileContent(url) { // stackoverflow
  fetch(url).then(response => {
    return response.text();
  });
}

Framework.LoadExtension = (src) => {
  const ext = document.createElement("script");
  ext.src = src;
  document.body.append(ext);
};

const CheckFrameworkLine = (x) => {
  const BannedPhrases = [ // NEVER string.lower x. That would make Framework.Style be banned.
    "eval",
    "document",
    ".style",
    "link",
    "iframe",
    "embed"
  ];

  for (i = 0; i < BannedPhrases.length; i++) {
    if (Framework.String.Find(x, BannedPhrases[i])) {
      return STRICT_MODE ? false : true; // Kill extension
    }
  }

  return true; // Line is safe C:
};