import { Request, Response } from 'express';

/**
 * HealthCheckController class handles the health check endpoint.
 */

const healthCheckController = (req: Request, res: Response) => {
  /**
   * Handles the health check request.
   * @param req - The request object.
   * @param res - The response object.
   */
  res.status(200).json({ status: 'ok' });
};
export default healthCheckController;
