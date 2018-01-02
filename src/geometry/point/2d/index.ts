export type Point = [number, number];

export const _getXY = (start, end) => [end[0] - start[0], end[1] - start[1]];

export {default as angle} from "./angle";
export {default as bounds} from "./bounds";
export {default as clockwiseSort} from "./clockwise_sort";
export {default as rotateAroundPoint} from "./rotate_around_point";
