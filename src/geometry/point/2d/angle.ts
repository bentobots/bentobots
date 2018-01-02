import { _getXY } from ".";

/**
 * Calculates the angle (in radians) of a line drawn between two points
 * @param start
 * @param end
 */
const angle = (start: [number, number], end: [number, number]): number => {
  const [x, y] = _getXY(start, end);
  return Math.atan2(y, x);
};

export default angle;
