import binarySearch from "./index";

describe("test binary search", () => {
  it("should return 5 for [1, 2, 4, 5, 6, 8, 9]", () => {
    expect(binarySearch([1, 2, 4, 5, 6, 8, 9], 8)).toBe(5);
  });
  it("should return null for [1, 2, 4, 5, 6, 8, 9]", () => {
    expect(binarySearch([1, 2, 4, 5, 6, 8, 9], 12)).toBe(null);
  });
  it("should return 0 for [1, 2, 4, 5, 6, 8, 9]", () => {
    expect(binarySearch([1, 2, 4, 5, 6, 8, 9], 1)).toBe(0);
  });
});
