import Web3 from 'web3'
import contract from '@truffle/contract'

const provider = () => {
  if (typeof web3 !== 'undefined') {
    return web3.currentProvider
  } else {
    console.error('Please install the MetaMask extension')
  }
}

export const eth = new Web3(provider()).eth

export const getInstance = (artifact) => {
  const contractObj = contract(artifact)
  contractObj.setProvider(provider())

  return contractObj.deployed()
}
