import getWeb3 from './getWeb3'
import getContractInstance from './getContractInstance'
import TweetStorage from './contracts/TweetStorage.json'
import TweetController from './contracts/TweetController.json'
import { getUserInfo } from './users'

export const createTweet = async (text) => {
  const web3 = await getWeb3()

  const controller = await getContractInstance(web3, TweetController)

  try {
    const addresses = await web3.eth.getAccounts()

    const result = await controller.methods.createTweet(text).send({
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

export const getTweetIdsFromUser = async (userId) => {
  const web3 = await getWeb3()

  const storage = await getContractInstance(web3, TweetStorage)
  const tweetIds = await storage.methods.getTweetIdsFromUser(userId).call()

  return tweetIds.map((tweetId) => parseInt(tweetId))
}

export const loadTweetsFromTweetPromises = async (tweetPromises) => {
  const tweets = await Promise.all(tweetPromises)

  const userPromises = tweets.map((tweet) => {
    const { userId } = tweet
    return getUserInfo(userId)
  })

  const users = await Promise.all(userPromises)

  return tweets
    .map((tweet, index) => {
      return {
        user: users[index],
        ...tweet,
      }
    })
    .reverse()
}

export const getAllTweetIds = async () => {
  const web3 = await getWeb3()

  const storage = await getContractInstance(web3, TweetStorage)

  const numTweets = await storage.methods.getNumTweets().call()

  const tweetIdPromises = []
  for (let i = 0; i < numTweets; i++) {
    tweetIdPromises.push(storage.methods.tweetIds(i).call())
  }

  const tweetIds = await Promise.all(tweetIdPromises)

  return tweetIds
}
