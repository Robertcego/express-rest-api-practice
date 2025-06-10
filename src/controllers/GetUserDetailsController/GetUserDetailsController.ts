import { Request, Response } from 'express';
import { userDetailsStore } from '../../infrastructure/mock-data/store/';

/**
 * Handles the retrieval of user details by ID.
 * Fetches a user from the mock store and returns it in the response.
 *
 */

const getUserDetailsController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const userDetails = userDetailsStore.find((user) => user.id === id);
    if (!userDetails) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json(userDetails);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default getUserDetailsController;
