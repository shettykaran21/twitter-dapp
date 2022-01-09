import Web3 from 'web3'

const resolveWeb3 = async (resolve) => {
  let selectedAccount
  let provider = window.ethereum

  if (typeof provider !== 'undefined') {
    try {
      const accounts = await provider.request({ method: 'eth_requestAccounts' })
      selectedAccount = accounts[0]
    } catch (err) {
      console.log(err)
      return
    }

    window.ethereum.on('accountsChanged', function (accounts) {
      selectedAccount = accounts[0]
    })
  }

  const web3 = new Web3(provider)

  resolve(web3)
}

export default () =>
  new Promise((resolve) => {
    window.addEventListener(`load`, () => {
      resolveWeb3(resolve)
    })
    if (document.readyState === `complete`) {
      resolveWeb3(resolve)
    }
  })
