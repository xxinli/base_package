
import { Environment } from "./Environment";
import * as winston from "winston";

export enum LogLevel {
  ERROR = "error",
  WARN = "warn",
  INFO = "info",
  HTTP = "http",
  VERBOSE = "verbose",
  DEBUG = "debug",
  SILLY = "silly"
}

export class Logger {
  private readonly logger: winston.Logger;
  constructor (level: LogLevel) {
    this.logger = winston.createLogger({
      level,
      format: winston.format.json(),
      defaultMeta: { service: "user-service" },
      transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
      ],
    });

    //
    // If we're not in production then log to the `console` with the format:
    // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
    //
    if (Environment.getEnvironment() !== "production") {
      this.logger.add(new winston.transports.Console({
        format: winston.format.simple(),
      }));
    }
  }

  async info(message: string, obj?: any): Promise<void> {
    this.logger.log("info", message, {
      ...obj
    });
  }

  async debug(message: string, obj?: any): Promise<void> {
    this.logger.log("debug", message, {
      obj
    });
  }

  async error(message: string, obj?: any): Promise<void> {
    this.logger.log("error", message, {
      ...obj
    });
  }
}
