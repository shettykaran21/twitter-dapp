const receiver = '0xC44A6F0E57E1E0FDbF9C07C745753195536AD30C'
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
