const TweetController = artifacts.require('TweetController')
const TweetStorage = artifacts.require('TweetStorage')
const ContractManager = artifacts.require('ContractManager')

module.exports = async (deployer) => {
  await deployer.deploy(TweetController)
  const tweetCtrl = await TweetController.deployed()

  tweetCtrl.setManagerAddr(ContractManager.address)

  const [manager, storage] = await Promise.all([
    ContractManager.deployed(),
    TweetStorage.deployed(),
  ])

  return await Promise.all([
    manager.setAddress('TweetController', TweetController.address),
    storage.setControllerAddr(TweetController.address),
  ])
}
