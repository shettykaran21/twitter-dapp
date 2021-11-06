const TweetStorage = artifacts.require('TweetStorage')
const utils = require('../utils')

const { assertVMException } = utils

contract('tweets', () => {
  it("can't create tweet without controller", async () => {
    const storage = await TweetStorage.deployed()

    try {
      const tx = await storage.createTweet(1, 'karan')
      assert.fail()
    } catch (err) {
      assertVMException(err)
    }
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
