import { GlobalLogger } from "./GlobalLogger";

describe("GlobalLogger", () => {
    beforeEach(() => {
        process.env.LOG_LEVEL = "debug";
    });

    it("Consecutive calls to GlobalLogger.getInstance() should yield the same instance of the logger",
        () => {
            expect(GlobalLogger.getInstance()).toEqual(GlobalLogger.getInstance());
        });
});
