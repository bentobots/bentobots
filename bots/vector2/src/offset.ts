import Shape from "clipper-js";
import { IClipperPoint, IPoint } from ".";

const multiplier = 1e5;

const toClipper = ([x, y]: IPoint): IClipperPoint => ({
  X: x * multiplier,
  Y: y * multiplier
});

const fromClipper = ({ X, Y }: IClipperPoint): IPoint => [
  X / multiplier,
  Y / multiplier
];

/**
 * Enlarges or shrinks a polygon
 */
const offset = (
  POINTS: IPoint[],
  {
    DELTA = -1,
    JOINT_TYPE = "jtMiter",
    END_TYPE = "etClosedPolygon",
    MITER_LIMIT = Infinity,
    ROUND_PRECISION = 0
  } = {}
) => {
  const newPoints = POINTS.map(toClipper as any);

  const subject = new Shape([newPoints], true);
  const newShape = subject.offset(DELTA * multiplier, {
    jointType: JOINT_TYPE,
    endType: END_TYPE,
    miterLimit: MITER_LIMIT,
    roundPrecision: ROUND_PRECISION
  });

  const outPath = newShape.paths[0] || [];
  const OFFSET_POINTS = outPath.map(fromClipper);

  return OFFSET_POINTS;
};

export default offset;
