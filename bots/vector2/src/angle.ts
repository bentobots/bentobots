import { Point, _getXY } from ".";
import rad2deg from "./rad2deg";
import compose from "./_compose";

/**
 * Calculates the angle (in radians) of a line drawn between two points
 * @param start
 * @param end
 */
const angle = (start: Point, end: Point): number => {
  const [x, y] = _getXY(start, end);
  return Math.atan2(y, x);
};

export const rads = angle;

export const degs = compose(rad2deg, angle);

export default angle;
