import config from '../../../config/index';
import ApiError from '../../../errors/ApiError';
import { User } from '../user.model';
import { IUser } from './user.interface';
import { generatedId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generatedId();
  user.id = id;
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createUser) {
    throw new ApiError(400, 'Failed to create user!');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
