import { Request, Response } from 'express';

/**
 * HealthCheckController class handles the health check endpoint.
 */

const healthCheckController = (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
};
export default healthCheckController;
