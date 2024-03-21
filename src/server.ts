import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { logger, errorlogger } from './shared/logger';
import { Server } from 'http';

async function boostrap() {
  let server: Server;
  try {
    await mongoose.connect(config.database_url as string);
    logger.info(`🛢   Database is connected successfully`);

    server = app.listen(config.port, () => {
      logger.info(`Application  listening on port ${config.port}`);
    });
  } catch (err) {
    errorlogger.error('Failed to connect database', err);
  }

  process.on('unhandledRejection', error => {
    console.log(
      'Unhandled rejection detected. server is closing soon-------- ',
    );
    if (server) {
      server.close(() => {
        errorlogger.error(error);
        process.exit(1);
      });
    } else {
      errorlogger.error(error);
      process.exit(1);
    }
  });
}

boostrap();
