import Web3 from 'web3'

const provider = () => {
  if (typeof web3 !== 'undefined') {
    return web3.currentProvider
  } else {
    console.error('Please install the MetaMask extension')
  }
}

export const eth = new Web3(provider()).eth
