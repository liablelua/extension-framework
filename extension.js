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

