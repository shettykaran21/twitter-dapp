import { useEffect } from 'react'
import { Box } from '@mui/material'

import { eth } from '../web3/provider'
import UserStorage from '../web3/artifacts/UserStorage.json'

const HomePage = () => {
  useEffect(async () => {
    console.log(UserStorage)

    try {
      await window.ethereum.enable()
      const addresses = await eth.getAccounts()
      const balance = await eth.getBalance(addresses[0])
    } catch (err) {
      console.log('User denied access to their ETH addresses 😢')
    }
  }, [])

  return <Box>Home Page</Box>
}

export default HomePage
