import dijkstrasAlgorithm from ".";

describe("test Dijkstra's Algorithm", () => {
  it("Test graph 1", () => {
    const graph = {
      start: {
        a: 6,
        b: 2,
      },
      a: {
        fin: 1,
      },
      b: {
        a: 3,
        fin: 5,
      },
      fin: {},
    };
    expect(dijkstrasAlgorithm(graph)).toEqual({
      path: ["b", "a"],
      cost: 6,
    });
  });
  it("Test graph 2", () => {
    const graph = {
      start: {
        a: 3,
        fin: 8,
      },
      a: {
        fin: 4,
      },
      fin: {},
    };
    expect(dijkstrasAlgorithm(graph)).toEqual({ cost: 7, path: ["a"] });
  });
  it("Test graph 3", () => {
    const graph = {
      start: {
        a: 3,
        fin: 4,
      },
      a: {
        fin: 4,
      },
      fin: {},
    };
    expect(dijkstrasAlgorithm(graph)).toEqual({ path: [], cost: 4 });
  });
  it("Test graph 4", () => {
    const graph = {
      start: {
        a: 2,
        b: 5,
      },
      a: {
        b: 8,
        d: 7,
      },
      b: {
        c: 4,
        d: 2,
      },
      c: {
        d: 6,
        fin: 3,
      },
      d: {
        fin: 1,
      },
      fin: {},
    };
    expect(dijkstrasAlgorithm(graph)).toEqual({ path: ["b", "d"], cost: 8 });
  });
});
