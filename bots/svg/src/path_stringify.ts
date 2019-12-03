// import { IPoint } from "../../vector2/src";
type IPoint = number[];

/**
 * Converts an array of XY points into an SVG path string
 * @param points
 * @returns {String}
 */
const pathStringify = ([first, ...rest]: IPoint[]) => `M ${first} L ${rest} Z`;

export default pathStringify;
