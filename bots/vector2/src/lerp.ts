import { IPoint } from ".";

const lerp = (delta: number) => (
  [x0, y0]: IPoint,
  [x1, y1]: IPoint
): IPoint => {
  return [(x0 + x1) * delta, (y0 + y1) * delta];
};

export default lerp;
