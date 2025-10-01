import { describe, expect, test } from "vitest";
import { mult } from "../src/index";

describe("add()", () => {
  test("adds numbers correctly", () => {
    for (let i = 0; i < 100; i++) {
      const a = Math.floor(Math.random() * 1000);
      const b = Math.floor(Math.random() * 1000);

      expect(mult(a, b)).toEqual(a * b);
    }
  });
});
