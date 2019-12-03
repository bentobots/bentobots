import angle, { degs, rads } from "./angle";

it("calcs angle in radians", () => {
  expect(angle([0, 0], [10, 10])).toEqual(0.7853981633974483);
  expect(rads([0, 0], [10, 10])).toEqual(0.7853981633974483);
});

it("calcs angle in degrees", () => {
  expect(degs([0, 0], [10, 10])).toEqual(45);
});
