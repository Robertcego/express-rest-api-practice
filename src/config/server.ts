import express from 'express';
import dotenv from 'dotenv';
import routes from '../routes/index';

dotenv.config();

class ServerConfig {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  /**
   * Initializes the server configuration.
   * This method sets up the necessary middleware and routes.
   */

  public start(): void {
    // Initialize routes
    routes(this.app);
    // Start the server
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log('====================================');
      console.log(`Server is running on port: http://localhost:${PORT}`);
      console.log('====================================');
    });
  }
}

export default new ServerConfig();
