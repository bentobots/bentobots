import pluck from "./pluck";

it("should pluck from objects", () => {
  expect(pluck('b')({a:2,b:3})).toEqual(3)
})
