import { UserDetails } from '../../../types/Users';
import { generateUserDetailsMockData } from '../data/GenerateUserDetailsMockData';
import userStore from './UserStore';

const userDetailsStore: UserDetails[] = generateUserDetailsMockData(userStore);

export default userDetailsStore;
