
import { Environment } from "./Environment";
import { Logger, LogLevel } from "./Logger";

/**
 *  Global instance of the Logger
 */
export class GlobalLogger {
    /**
     * Gets the global instance of the logger...
     * @example Usage: GlobalLogger.getInstance().debug("log message");
     * @returns logger
     */
    public static getInstance(): Logger {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!GlobalLogger._instance) {
            GlobalLogger._instance = new GlobalLogger();
        }

        return GlobalLogger._logger;
    }

    private constructor() {
        GlobalLogger._logger = new Logger(Environment.getLogLevel() as LogLevel);
    }

    private static _logger: Logger;
    private static _instance: GlobalLogger;
}
