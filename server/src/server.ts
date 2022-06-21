import { app } from './app';
import logger from './utils/logger';
import swaggerDocs from './utils/swagger';

const createServer = async () => {
  try {
    // Start the server
    const PORT = 8000;
    // Binding Heroku to 0.0.0.0 instead of localhost
    app.listen(PORT, '0.0.0.0', () => {
      logger.info(`Server listening on port ${PORT}`);

      swaggerDocs(app, PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

createServer();
