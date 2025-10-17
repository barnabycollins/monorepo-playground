import { afterAll, afterEach, describe, expect, test, vi } from "vitest";
const consoleMock = vi
  .spyOn(console, "log")
  .mockImplementation(() => undefined);

import { logger } from "../src/index";

describe("logger", () => {
  afterEach(() => consoleMock.mockClear());

  afterAll(() => consoleMock.mockReset());

  test("works", () => {
    logger.log("henlo");

    expect(consoleMock).toHaveBeenCalledWith(
      expect.stringMatching(/[0-9] says "henlo"/),
    );
  });
});
