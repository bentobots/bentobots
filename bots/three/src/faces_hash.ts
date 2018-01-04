import { Face3 } from "three";

/**
 * Calculates a unique hash of an array of faces
 * @param faces
 */
const facesHash = (faces: Array<Face3>): string =>
  faces.reduce((str, f) => str + f.a + f.b + f.c, "");

export default facesHash;
