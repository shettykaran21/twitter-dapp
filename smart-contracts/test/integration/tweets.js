const TweetStorage = artifacts.require('TweetStorage')
const TweetController = artifacts.require('TweetController')
const UserController = artifacts.require('UserController')
const utils = require('../utils')

const { assertVMException } = utils

contract('tweets', () => {
  before(async () => {
    const userController = await UserController.deployed()

    const username = web3.utils.asciiToHex('karan')
    const firstName = web3.utils.asciiToHex('Karan')
    const lastName = web3.utils.asciiToHex('Shetty')

    await userController.createUser(
      username,
      firstName,
      lastName,
      'example@example.com',
      'I am Karan Shetty'
    )
  })

  it("can't create tweet without controller", async () => {
    const storage = await TweetStorage.deployed()

    try {
      const tx = await storage.createTweet(1, 'karan')
      assert.fail()
    } catch (err) {
      assertVMException(err)
    }
  })

  it('can create tweet with controller', async () => {
    const controller = await TweetController.deployed()

    const tx = await controller.createTweet('Hello world!')

    assert.isOk(tx)
  })

  it('can get tweet', async () => {
    const storage = await TweetStorage.deployed()

    const tweetId = 1
    const tweet = await storage.tweets.call(tweetId)
    const { id, text, userId } = tweet

    assert.equal(parseInt(id), 1)
    assert.equal(text, 'Hello world!')
    assert.equal(parseInt(userId), 1)
  })
})
