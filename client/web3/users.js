import { getInstance } from './provider'

import UserStorage from './artifacts/UserStorage.json'

export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage)
  const profile = await storage.profiles.call(userId)

  return profile
}
