import { IPoint, _getXY } from ".";

/**
 * Calculates the distance between two points
 * @returns {Number}
 */
const distance = (start: IPoint, end: IPoint): number => {
  const [x, y] = _getXY(start, end);
  return Math.hypot(x, y);
};

export default distance;
