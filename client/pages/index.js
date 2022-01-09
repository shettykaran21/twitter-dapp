import { getUserInfo } from '../web3/users'

const HomePage = () => {
  const logUser = async () => {
    const userInfo = await getUserInfo(1)
    console.log(userInfo)
  }

  return (
    <div>
      <button onClick={logUser}>Get user with ID 1</button>
    </div>
  )
}

export default HomePage
