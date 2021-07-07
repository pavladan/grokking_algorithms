import longestCommonSubsequence from "./longestCommonSubsequence";

describe("Test dynamic programming", () => {
  it("test longest common subsequence from 'vista' and 'hish", () => {
    expect(longestCommonSubsequence("vista", "hish")).toBe("is");
  });
  it("test longest common subsequence from 'fish' and 'hish", () => {
    expect(longestCommonSubsequence("fish", "hish")).toBe("ish");
  });
});
