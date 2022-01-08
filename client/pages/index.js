import { useEffect } from 'react'
import { Box } from '@mui/material'

import { eth } from '../web3/provider'

const HomePage = () => {
  useEffect(async () => {
    try {
      await window.ethereum.enable()
      const addresses = await eth.getAccounts()
      console.log(addresses)
      const balance = await eth.getBalance(addresses[0])
      console.log(balance)
    } catch (err) {
      console.log('User denied access to their ETH addresses 😢')
    }
  }, [])

  return <Box>Home Page</Box>
}

export default HomePage
