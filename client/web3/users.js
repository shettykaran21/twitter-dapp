import getWeb3 from './getWeb3'
import getContract from './getContract'
import UserStorage from './contracts/UserStorage.json'
import UserController from './contracts/UserController.json'

export const getUserInfo = async (userId) => {
  const web3 = await getWeb3()

  const contract = await getContract(web3, UserStorage)
  const { id, username } = await contract.methods.profiles(userId).call()

  return {
    id: parseInt(id),
    username: web3.utils.hexToAscii(username).replace(/\u0000/g, ''),
  }
}

export const createUser = async (username) => {
  const web3 = await getWeb3()

  const controller = await getContract(web3, UserController)

  try {
    const addresses = await web3.eth.getAccounts()

    const result = await controller.methods
      .createUser(web3.utils.asciiToHex(username))
      .send({
        from: addresses[0],
      })

    return result
  } catch (err) {
    console.error(err)
  }
}
