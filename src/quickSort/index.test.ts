import quickSort from ".";

describe("test quick sort", () => {
  it("sorting [8, 6, 7, 12, 2]", () => {
    expect(quickSort([8, 6, 7, 12, 2])).toEqual([2, 6, 7, 8, 12]);
  });
  it("sorting [-1, -6, 7, 2, 0]", () => {
    expect(quickSort([-1, -6, 7, 2, 0])).toEqual([-6, -1, 0, 2, 7]);
  });
  it(`sorting ["c", "a", "b"]`, () => {
    expect(quickSort(["c", "a", "b", "I", "D", "zet", "x"])).toEqual([
      "D",
      "I",
      "a",
      "b",
      "c",
      "x",
      "zet",
    ]);
  });
});
