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
    }
}

Framework.Create = {
    Header: () => {
        return document.createElement("header");
    },
    Text: () => {
        return document.createElement("p");
    },
    Image: () => {
        return document.createElement("img");
    }
}