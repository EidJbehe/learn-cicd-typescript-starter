import { describe, expect, test } from "vitest";

describe("basic test", () => {
  test("true should be true", () => {
    expect(true).toBe(true);
  });

  test("number equality", () => {
    expect(2 + 2).toBe(4);
  });
});
