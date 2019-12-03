import { IPoint } from ".";

/**
 * Rotates a point around a given axis
 * @param axis
 * @param angleInRadians
 * @param point
 * @returns {Array}
 */
const rotateAroundPoint = (
  rotationPoint: IPoint,
  angleInRadians: number = 0,
  point: IPoint
): IPoint => {
  const [originX, originY] = rotationPoint;
  const [pointX, pointY] = point;

  return [
    Math.cos(angleInRadians) * (pointX - originX) -
      Math.sin(angleInRadians) * (pointY - originY) +
      originX,
    Math.sin(angleInRadians) * (pointX - originX) +
      Math.cos(angleInRadians) * (pointY - originY) +
      originY
  ];
};

export default rotateAroundPoint;
