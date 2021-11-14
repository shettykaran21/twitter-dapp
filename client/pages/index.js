import { useEffect } from 'react'

import { provider } from '../web3/provider'

const HomePage = () => {
  useEffect(async () => {
    try {
      const accounts = await provider.request({
        method: 'eth_requestAccounts',
      })
      console.log(accounts)
    } catch (err) {
      console.error('User denied access to their ETH addresses!')
    }
  }, [])

  return <div>Hello there</div>
}

export default HomePage
