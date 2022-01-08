import { useEffect } from 'react'
import { Box } from '@mui/material'

import { eth } from '../web3/provider'

const HomePage = () => {
  useEffect(() => {
    try {
      await window.ethereum.enable()
    } catch (err) {
      console.log('User denied access to their ETH addresses 😢')
    }
  }, [])

  return <Box>Home Page</Box>
}

export default HomePage
