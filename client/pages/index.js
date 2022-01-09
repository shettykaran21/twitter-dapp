import { createUser, getUserInfo } from '@web3/users'
import { createTweet, getTweetInfo } from '@web3/tweets'

import Layout from '@components/layout'

const HomePage = () => {
  const logUser = async () => {
    const userInfo = await getUserInfo(1)
    console.log(userInfo)
  }

  const createTestUser = async () => {
    const tx = await createUser('test')
    console.log(tx)
  }

  const logTweet = async () => {
    const tweetInfo = await getTweetInfo(1)
    console.log(tweetInfo)
  }

  const createUserTweet = async () => {
    const tx = await createTweet('Hello world!')
    console.log(tx)
  }

  return <Layout></Layout>
}

export default HomePage
