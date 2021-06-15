import selectionSort from "./index";

describe("test binary search", () => {
  it("sorting [8, 6, 7, 12, 2]", () => {
    expect(selectionSort([8, 6, 7, 12, 2])).toEqual([2, 6, 7, 8, 12]);
  });
  it("sorting [-1, -6, 7, 2, 0]", () => {
    expect(selectionSort([-1, -6, 7, 2, 0])).toEqual([-6, -1, 0, 2, 7]);
  });
});
