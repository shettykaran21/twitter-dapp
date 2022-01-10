import getWeb3 from './getWeb3'
import getContractInstance from './getContractInstance'
import UserStorage from './contracts/UserStorage.json'
import UserController from './contracts/UserController.json'

export const getUserInfo = async (userId) => {
  const web3 = await getWeb3()

  const storage = await getContractInstance(web3, UserStorage)
  const { id, username } = await storage.methods.profiles(userId).call()

  return {
    id: parseInt(id),
    username: web3.utils.hexToAscii(username).replace(/\u0000/g, ''),
  }
}

export const createUser = async (...params) => {
  const web3 = await getWeb3()

  const controller = await getContractInstance(web3, UserController)

  try {
    const addresses = await web3.eth.getAccounts()

    const [username, firstName, lastName, gravatarEmail, bio] = params

    console.log(params)

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
