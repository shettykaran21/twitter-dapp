import getWeb3 from './getWeb3'
import getContractInstance from './getContractInstance'
import TweetStorage from './contracts/TweetStorage.json'
import TweetController from './contracts/TweetController.json'

export const createTweet = async (text) => {
  const web3 = await getWeb3()

  const controller = await getContractInstance(web3, TweetController)

  try {
    const addresses = await web3.eth.getAccounts()

    const result = await controller.methods.createTweet(1, text).send({
      from: addresses[0],
    })

    return result
  } catch (err) {
    console.error(err)
  }
}

export const getTweetInfo = async (tweetId) => {
  const web3 = await getWeb3()

  const storage = await getContractInstance(web3, TweetStorage)
  const { id, text, userId, postedAt } = await storage.methods
    .tweets(tweetId)
    .call()

  return {
    id: parseInt(id),
    userId: parseInt(userId),
    text,
    postedAt: parseInt(postedAt),
  }
}
