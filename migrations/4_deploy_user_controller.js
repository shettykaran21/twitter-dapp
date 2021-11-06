const UserController = artifacts.require('UserController')
const UserStorage = artifacts.require('UserStorage')
const ContractManager = artifacts.require('ContractManager')

module.exports = async (deployer) => {
  await deployer.deploy(UserController)
  const userCtrl = await UserController.deployed()

  userCtrl.setManagerAddr(ContractManager.address)

  const [manager, storage] = await Promise.all([
    ContractManager.deployed(),
    UserStorage.deployed(),
  ])

  return await Promise.all([
    manager.setAddress('UserController', UserController.address),
    storage.setControllerAddr(UserController.address),
  ])
}
