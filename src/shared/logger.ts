import { createLogger, format, transports } from 'winston';
import path from 'path';
const { combine, timestamp, label, printf, prettyPrint } = format;
import DailyRotateFile from 'winston-daily-rotate-file';
// custom log format
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${date.toDateString()} ${hour}:${minute}:${second}[${label}] ${level}: ${message} `;
});

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'PING' }), timestamp(), prettyPrint()),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'success-%DATE%.log',
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

const errorlogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'PING' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'error-%DATE%.log',
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

export { logger, errorlogger };
