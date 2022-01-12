import { useEffect, useState } from 'react'

import {
  getAllTweetIds,
  getTweetInfo,
  loadTweetsFromTweetPromises,
} from '@web3/tweets'
import BackgroundWrapper from '@components/background-wrapper'
import Layout from '@components/layout'
import TweetsList from '@components/tweets-list'
import { Typography } from '@mui/material'
import Loader from '@components/loader'

const FeedPage = () => {
  const [allTweets, setAllTweets] = useState([])
  const [loading, setLoading] = useState(false)

  const loadLatestTweets = async () => {
    setLoading(true)

    const tweetIds = await getAllTweetIds()

    const tweetPromises = tweetIds.map((tweetId) => {
      return getTweetInfo(tweetId)
    })

    const tweets = await loadTweetsFromTweetPromises(tweetPromises)

    setLoading(false)
    setAllTweets(tweets)
  }

  useEffect(() => {
    loadLatestTweets()
  }, [])

  return (
    <BackgroundWrapper>
      <Layout dark maxWidth="sm">
        {loading && <Loader />}
        {!loading && allTweets.length === 0 && (
          <Typography sx={{ textAlign: 'center', marginTop: '1rem' }}>
            No tweets yet 😞
          </Typography>
        )}
        {!loading && allTweets.length > 0 && <TweetsList tweets={allTweets} />}
      </Layout>
    </BackgroundWrapper>
  )
}

export default FeedPage
