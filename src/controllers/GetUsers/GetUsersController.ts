import { Request, Response } from 'express';

import { userStore } from '../../infrastructure/mock-data/store';

/**
 * Handles the retrieval of all users.
 * Fetches all users from the mock store and returns them in the response.
 */

const getUsersController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    // Send the generated users as a response
    res.status(200).json({ userStore });
  } catch (error) {
    console.error('Error generating users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
export default getUsersController;
