import getWeb3 from './getWeb3'
import getContractInstance from './getContractInstance'
import UserStorage from './contracts/UserStorage.json'
import UserController from './contracts/UserController.json'

export const getUserInfo = async (userId) => {
  const web3 = await getWeb3()

  try {
    const storage = await getContractInstance(web3, UserStorage)
    const { id, username, firstName, lastName, gravatarEmail, bio } =
      await storage.methods.profiles(userId).call()

    if (!parseInt(id)) {
      const error = new Error('User not found')
      throw error
    }

    return {
      id: parseInt(id),
      username: web3.utils.hexToAscii(username).replace(/\u0000/g, ''),
      firstName: web3.utils.hexToAscii(firstName).replace(/\u0000/g, ''),
      lastName: web3.utils.hexToAscii(lastName).replace(/\u0000/g, ''),
      gravatarEmail,
      bio,
    }
  } catch (err) {
    console.log(err)
  }
}

export const createUser = async ({
  username,
  firstName,
  lastName,
  gravatarEmail,
  bio,
}) => {
  const web3 = await getWeb3()

  const controller = await getContractInstance(web3, UserController)

  try {
    const addresses = await web3.eth.getAccounts()

    const result = await controller.methods
      .createUser(
        web3.utils.asciiToHex(username),
        web3.utils.asciiToHex(firstName),
        web3.utils.asciiToHex(lastName),
        gravatarEmail,
        bio
      )
      .send({
        from: addresses[0],
      })

    return result
  } catch (err) {
    console.error(err)
  }
}

export const getLoggedInUserId = async () => {
  const web3 = await getWeb3()

  try {
    const addresses = await web3.eth.getAccounts()

    if (!addresses) return

    const storage = await getContractInstance(web3, UserStorage)
    const userId = await storage.methods.addresses(addresses[0]).call()

    return parseInt(userId)
  } catch (err) {
    console.error(err)
  }
}

export const getUserIdFromUsername = async (username) => {
  const web3 = await getWeb3()

  try {
    const storage = await getContractInstance(web3, UserStorage)
    const userId = await storage.methods
      .usernames(web3.utils.asciiToHex(username))
      .call()

    return userId
  } catch (err) {
    console.log(err)
  }
}
