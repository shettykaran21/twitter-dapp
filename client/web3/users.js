import getWeb3 from './getWeb3'
import getContract from './getContract'
import UserStorage from './contracts/UserStorage.json'

export const getUserInfo = async (userId) => {
  const web3 = await getWeb3()

  const contract = await getContract(web3, UserStorage)
  const profile = await contract.methods.profiles(userId).call()

  return profile
}
