import { createUser, getUserInfo } from '../web3/users'
import { createTweet, getTweetInfo } from '../web3/tweets'

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
    <div>
      <button onClick={logUser}>Get user with ID 1</button>
      <button onClick={createTestUser}>Create user</button>
      <button onClick={logTweet}>Get tweet with ID 1</button>
      <button onClick={createUserTweet}>Create tweet</button>
    </div>
  )
}

export default HomePage
