import { add } from "@my-org/my-fn-1";
import { mult } from "@my-org/my-fn-2";
import { describe, expect, test } from "vitest";

describe("integration tests", () => {
  test("maths works", () => {
    const finalGuy = add(mult(4, 8), mult(3, -2));

    expect(finalGuy).toEqual(4 * 8 + 3 * -2);

    console.log("all done!");
  });
});
