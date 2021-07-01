import breadthFirstSearch from ".";

describe("test breadth first search", () => {
  const obj = {
    alice: {
      peggy: {},
    },
    bob: {
      anuj: {},
      peggy: {},
    },
    claire: {
      thom: {},
    },
    peggy: {
      sam: {},
    },
  };

  it("Found", () => {
    expect(breadthFirstSearch(obj, "peggy")).toEqual({ sam: {} });
  });
  it("No found", () => {
    expect(breadthFirstSearch(obj, "ter")).toEqual(null);
  });
  it("Found", () => {
    expect(breadthFirstSearch(obj, "bob")).toEqual({
      anuj: {},
      peggy: {},
    });
  });
  it("Found", () => {
    expect(breadthFirstSearch(obj, "anuj")).toEqual({});
  });
});
