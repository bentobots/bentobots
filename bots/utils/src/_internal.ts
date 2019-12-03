export const doCompose = (f, g) => (...args) => f(g(...args));
