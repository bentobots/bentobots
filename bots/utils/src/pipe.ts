import { doCompose } from "./_internal";

/**
 * pipes functions together into a chain that runs from left to right
 * @param functions
 * @returns {Function}
 */
const pipe = (...fns: Function[]): Function => fns.reduceRight(doCompose);

export default pipe;
