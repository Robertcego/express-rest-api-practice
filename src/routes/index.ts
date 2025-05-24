import { Application, Request, Response } from 'express';
import {
  healthCheckController,
  getUsersController,
  getUserDetailsController,
} from '../controllers';

export default function routes(app: Application): void {
  // Health check
  app.get('/health', healthCheckController);

  // User routes
  app.get('/users', getUsersController); // ✅ GET all users
  app.get('/users/:id', getUserDetailsController); // ✅ GET one user by ID

  // Root route
  app.get('/', (_req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome to the API!' });
  });
}
