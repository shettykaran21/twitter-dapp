import { createUser, getUserInfo } from '../web3/users'

const HomePage = () => {
  const logUser = async () => {
    const userInfo = await getUserInfo(1)
    console.log(userInfo)
  }

  const createTestUser = async () => {
    const tx = await createUser('test')
    console.log(tx)
  }

  return (
    <div>
      <button onClick={logUser}>Get user with ID 1</button>
      <button onClick={createTestUser}>Create user</button>
    </div>
  )
}

export default HomePage
