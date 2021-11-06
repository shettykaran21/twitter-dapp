const TweetStorage = artifacts.require('TweetStorage')

contract('tweets', () => {
  before(async () => {
    const tweetStorage = await TweetStorage.deployed()
    await tweetStorage.createTweet(1, 'Hello world!')
  })

  it('get tweet', async () => {
    const storage = await TweetStorage.deployed()

    const tweetId = 1
    const tweet = await storage.tweets.call(tweetId)
    const { id, text, userId } = tweet

    assert.equal(parseInt(id), 1)
    assert.equal(text, 'Hello world!')
    assert.equal(parseInt(userId), 1)
  })
})
