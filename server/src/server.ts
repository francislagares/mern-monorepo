import { app } from './app';
import logger from './utils/logger';

const createServer = async () => {
  try {
    // Start the server
    const PORT = 8000;
    // Binding Heroku to 0.0.0.0 instead of localhost
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server listening on port ${PORT}!`);
      logger.info('Info message');
      logger.error('Error message');
      logger.warn('Warning message');
    });
  } catch (error) {
    console.log(error);
  }
};

createServer();
