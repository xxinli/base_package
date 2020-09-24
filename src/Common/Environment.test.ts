import { Environment, getEnvOrThrow } from "./Environment";

describe("Environment", () => {
  const errorMsg = (txt: string): string => `Environment variable ${txt} not set`;
  beforeEach(() => {
    process.env.LOG_LEVEL = "debug";
    process.env.A = "a";
    process.env.B = "b";
    process.env.AWS_REGION = "test-region";
    process.env.REGION ="test-region";
  });

  afterEach(() => {
    process.env = {};
  });

  it("getEnvOrThrow",() => {
    expect(getEnvOrThrow("LOG_LEVEL")).toBe("debug");
    expect(getEnvOrThrow("A")).toBe("a");
    expect(getEnvOrThrow("B")).toBe("b");
  });

  it("getEnvOrThrow - error thrown", () => {
    const variable = "ERROR";
    expect(() => {
      getEnvOrThrow(variable);
    }).toThrowError(new Error(errorMsg(variable)));
  });

  it("Environment", () => {
    expect(Environment.getAWSRegion()).toBe("test-region");
  });
});
