import config from '../../../config/index'
import { User } from './../users.model'
import { IUser } from './users.interface'
import { generatedId } from './users.utils'
// const createUser = async (user: IUser): Promise<IUser | null> => {
//   // auto generated incrimental id
//   const id =await generatedId()
//   user.id = id
//   // default password
//   if (!user.password) {
//     user.password = config.default_user_pass as string
//   }
//   const createdUser = await User.create(user)
//   if (createdUser) {
//     throw new Error('Failed to create user!')
//   }
//   return createdUser
// }
// export default {
//   createUser,
// }
const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generatedId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}

export default {
  createUser,
}
