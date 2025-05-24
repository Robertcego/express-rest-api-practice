export interface User {
  id: `${string}-${string}-${string}-${string}-${string}`;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface UserDetails extends User {
  email: string;
  role: 'admin' | 'user' | 'guest';
  lastLogin?: Date;
  profilePictureUrl?: string;
  age?: number;
  verified?: boolean;
  location?: string;
  phone?: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
}
