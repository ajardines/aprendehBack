
import * as fs from "fs";
import * as winston from "winston";

const logDir = "logs";
const logLevel = process.env.LOGLEVEL ? process.env.LOGLEVEL : "info";
const winstonLog = winston.createLogger({
  level: logLevel,
  transports: [
    new winston.transports.File({ filename: logDir + 'error.log', level: 'error' }),
    new winston.transports.File({ filename: logDir + "combined.log" })
  ]
});

if ( !fs.existsSync( logDir ) ) {
  // Create the directory if it does not exist
  fs.mkdirSync( logDir );
}

if (process.env.NODE_ENV !== "production") {
  winstonLog.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
    level: logLevel,
    handleExceptions: true
  }))
}

export { winstonLog };
