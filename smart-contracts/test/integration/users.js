const UserStorage = artifacts.require('UserStorage')
const UserController = artifacts.require('UserController')
const utils = require('../utils')

const { assertVMException } = utils

contract('users', () => {
  it("can't create user without controller", async () => {
    const storage = await UserStorage.deployed()

    try {
      const username = web3.utils.asciiToHex('karan')
      const firstName = web3.utils.asciiToHex('Karan')
      const lastName = web3.utils.asciiToHex('Shetty')

      const tx = await storage.createUser(
        0x0,
        username,
        firstName,
        lastName,
        'I like web3',
        'test@test.com'
      )
      assert.fail()
    } catch (err) {
      assertVMException(err)
    }
  })

  it('can create user with controller', async () => {
    const controller = await UserController.deployed()

    const username = web3.utils.asciiToHex('karan')
    const firstName = web3.utils.asciiToHex('Karan')
    const lastName = web3.utils.asciiToHex('Shetty')

    const tx = await controller.createUser(
      username,
      firstName,
      lastName,
      'I like web3',
      'test@test.com'
    )

    assert.isOk(tx)
  })

  it('can get user', async () => {
    const storage = await UserStorage.deployed()

    const userId = 1
    const userInfo = await storage.profiles.call(userId)

    const username = web3.utils.hexToAscii(userInfo[1]).replace(/\u0000/g, '')

    assert.equal(username, 'karan')
  })
})
