import express from 'express';

import { App } from './app';
import logger from './utils/logger';

export class Server {
  public init() {
    const httpServer = new App(express());

    httpServer.start();
  }
}
const server = new Server();

server.init();

process.on('SIGINT', () => {
  logger.info('SIGNINT received');
  // shutdown the server gracefully
  process.exit(0); // then exit
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  // shutdown the server gracefully
  process.exit(0); // then exit
});

process.on('uncaughtException', err => {
  logger.info('uncaughtException', err);
  process.exit(1);
});
