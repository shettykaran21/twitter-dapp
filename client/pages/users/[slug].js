import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Box } from '@mui/material'

import { getUserIdFromUsername, getUserInfo } from '@web3/users'
import Layout from '@components/layout'
import UserDetails from '@components/user-details'
import {
  getTweetIdsFromUser,
  getTweetInfo,
  loadTweetsFromTweetPromises,
} from '@web3/tweets'
import TweetsList from '@components/tweets-list'
import BackgroundWrapper from '@components/background-wrapper'

const UserProfilePage = () => {
  const [userProfile, setUserProfile] = useState(null)
  const [userTweets, setUserTweets] = useState([])

  const router = useRouter()

  const loadProfile = async (userId) => {
    const profile = await getUserInfo(userId)
    setUserProfile(profile)
  }

  const loadTweets = async (userId) => {
    const tweetIds = await getTweetIdsFromUser(userId)

    const tweetPromises = tweetIds.map((tweetId) => {
      return getTweetInfo(tweetId)
    })

    const tweets = await loadTweetsFromTweetPromises(tweetPromises)

    setUserTweets(tweets)
  }

  useEffect(() => {
    const fetchData = async () => {
      if (router.query.slug) {
        const userId = await getUserIdFromUsername(router.query.slug)

        loadProfile(userId)
        loadTweets(userId)
      }
    }

    fetchData()
  }, [router.query.slug])

  return (
    <>
      <Head>
        <title>
          {' '}
          Twitter DApp {userProfile && `| ${userProfile.username}`}
        </title>
      </Head>
      <BackgroundWrapper>
        <Layout dark maxWidth="sm">
          <Box>{userProfile && <UserDetails userData={userProfile} />}</Box>
          <TweetsList tweets={userTweets} />
        </Layout>
      </BackgroundWrapper>
    </>
  )
}

export default UserProfilePage
