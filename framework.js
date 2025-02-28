const Framework = {}; // Initalize Framework Const
var Styles = [];

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

Framework.AppendBody = (x) => {
  document.body.append(x);
};

Framework.Append = (a, b) => {
  a.append(b);
};

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
