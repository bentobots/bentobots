export type IPoint = number[];
export type IClipperPoint = { X: number; Y: number };

export const _getXY = (start, end) => [end[0] - start[0], end[1] - start[1]];

export { default as angle } from "./angle";
export { default as bounds } from "./bounds";
export { default as centroid } from "./centroid";
export { default as clockwiseSort } from "./clockwise_sort";
export { default as distance } from "./distance";
export { default as lerp } from "./lerp";
export { default as midpoint } from "./midpoint";
export { default as offset } from "./offset";
export { default as rad2deg } from "./rad2deg";
export { default as rotateAroundPoint } from "./rotate_around_point";
