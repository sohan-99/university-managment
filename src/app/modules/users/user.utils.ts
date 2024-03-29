import { User } from '../user.model';

export const findLastUserId = async () => {
  const lasUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();
  return lasUser?.id;
};

export const generatedId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0');
  // increment by one
  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  return incrementId;
};
