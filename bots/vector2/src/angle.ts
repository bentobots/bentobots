import { IPoint, _getXY } from ".";
// import pipe from "../../utils/src/pipe";
import rad2deg from "./rad2deg";

const doCompose = (f, g) => (...args) => f(g(...args));
const pipe = (...fns: Function[]): Function => fns.reduceRight(doCompose);

/**
 * Calculates the angle (in radians) of a line drawn between two points
 * @param start
 * @param end
 */
const angle = (start: IPoint, end: IPoint): number => {
  const [x, y] = _getXY(start, end);
  return Math.atan2(y, x);
};

export const rads = angle;

export const degs = pipe(angle, rad2deg);

export default angle;
