import greedyAlgorithm from ".";

describe("test Greedy Algorithm", () => {
  it("Find stations", () => {
    const stations = {
      kone: ["id", "nv", "ut"],
      ktwo: ["wa", "id", "mt"],
      ktree: ["or", "nv", "ca"],
      kfour: ["nv", "ut"],
      kfive: ["ca", "az"],
    };
    const statesNeeded = ["mt", "wa", "or", "id", "nv", "ut", "ca", "az"];
    expect(greedyAlgorithm(stations, statesNeeded)).toEqual([
      "kone",
      "ktwo",
      "ktree",
      "kfive",
    ]);
  });
});
