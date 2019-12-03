const doCompose = (f, g) => (...args) => f(g(...args));

export const compose = (...fns) => fns.reduce(doCompose);

export const pipe = (...fns) => fns.reduceRight(doCompose);

export default compose;
