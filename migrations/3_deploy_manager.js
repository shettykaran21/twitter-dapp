const ContractManager = artifacts.require('ContractManager')
const UserStorage = artifacts.require('UserStorage')
const TweetStorage = artifacts.require('TweetStorage')

module.exports = async (deployer) => {
  await deployer.deploy(ContractManager)

  const manager = await ContractManager.deployed()

  return await Promise.all([
    manager.setAddress('UserStorage', UserStorage.address),
    manager.setAddress('TweetStorage', TweetStorage.address),
  ])
}
