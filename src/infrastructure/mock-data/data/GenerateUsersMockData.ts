import { User } from '../../../types/Users';

export function generateUsersMockData(): User[] {
  const now = new Date();

  return [
    {
      id: crypto.randomUUID(),
      firstName: 'John',
      lastName: 'Doe',
      createdAt: now,
      updatedAt: now,
      isActive: true,
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Jane',
      lastName: 'Smith',
      createdAt: now,
      updatedAt: now,
      isActive: true,
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Alice',
      lastName: 'Johnson',
      createdAt: now,
      updatedAt: now,
      isActive: false,
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Bob',
      lastName: 'Brown',
      createdAt: now,
      updatedAt: now,
      isActive: true,
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Charlie',
      lastName: 'Davis',
      createdAt: now,
      updatedAt: now,
      isActive: true,
    },
  ];
}
