const receiver = '0x9FE9e3FaFB9550EcAA6De554BE58669901F5f770'
const amount = web3.utils.toWei('5', 'ether')

module.exports = async function (callback) {
  const addresses = await web3.eth.getAccounts()

  web3.eth.sendTransaction(
    {
      from: addresses[1],
      to: receiver,
      value: amount,
    },
    callback
  )
}
