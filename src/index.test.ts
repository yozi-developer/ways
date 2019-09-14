import { testFn } from "./index";

describe("test function", () => {
  it("return 42 ", async function() {
    const res = testFn();
    expect(res).toBe(42);
  });
});
