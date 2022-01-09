import { createUser, getUserInfo } from '@web3/users'
import { createTweet, getTweetInfo } from '@web3/tweets'
import Layout from '@components/layout'
import LandingScreen from '@components/landing-screen'

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

  return (
    <Layout>
      <LandingScreen />
    </Layout>
  )
}

export default HomePage
