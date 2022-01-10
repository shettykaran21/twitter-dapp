import { useEffect, useState } from 'react'

import {
  getAllTweetIds,
  getTweetInfo,
  loadTweetsFromTweetPromises,
} from '@web3/tweets'
import BackgroundWrapper from '@components/background-wrapper'
import Layout from '@components/layout'
import TweetsList from '@components/tweets-list'

const FeedPage = () => {
  const [allTweets, setAllTweets] = useState([])

  const loadLatestTweets = async () => {
    const tweetIds = await getAllTweetIds()

    const tweetPromises = tweetIds.map((tweetId) => {
      return getTweetInfo(tweetId)
    })

    const tweets = await loadTweetsFromTweetPromises(tweetPromises)

    setAllTweets(tweets)
  }

  useEffect(() => {
    loadLatestTweets()
  }, [])

  return (
    <BackgroundWrapper>
      <Layout dark maxWidth="sm">
        <TweetsList tweets={allTweets} />
      </Layout>
    </BackgroundWrapper>
  )
}

export default FeedPage
