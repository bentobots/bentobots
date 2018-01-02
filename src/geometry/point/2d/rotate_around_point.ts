import { Point, _getXY } from ".";

/**
 * Rotates a point around a given axis
 * @param axis
 * @param angleInRadians
 * @param point
 */
const rotateAroundPoint = (
  rotationPoint: [number, number],
  angleInRadians: number = 0,
  point: [number, number]
): [number, number] => {
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
