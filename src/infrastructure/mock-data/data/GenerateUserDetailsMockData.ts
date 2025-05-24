import { User, UserDetails } from '../../../types/Users';

export function generateUserDetailsMockData(userStore: User[]): UserDetails[] {
  return userStore.map((user) => ({
    ...user,
    email: `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@example.com`,
    role: 'user',
    lastLogin: new Date(),
    profilePictureUrl: `https://example.com/profile/${user.id}.jpg`,
    age: Math.floor(Math.random() * 50) + 18,
    verified: Math.random() > 0.5,
    location: 'Unknown',
    phone: `+1-${Math.floor(Math.random() * 9000000000) + 1000000000}`,
    bio: `This is a bio for ${user.firstName} ${user.lastName}.`,
    socialLinks: {
      twitter: `https://twitter.com/${user.firstName.toLowerCase()}`,
      linkedin: `https://linkedin.com/in/${user.firstName.toLowerCase()}-${user.lastName.toLowerCase()}`,
    },
  }));
}
