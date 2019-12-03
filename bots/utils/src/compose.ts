import { doCompose } from "./_internal";

/**
 * composes functions together into a chain that runs from right to left
 * @param functions
 * @returns {Function}
 */
const compose = (...fns: Function[]): Function => fns.reduce(doCompose);

export default compose;
