const UserStorage = artifacts.require('UserStorage')

contract('users', () => {
  it('create user', async () => {
    const storage = await UserStorage.deployed()

    const username = web3.utils.fromAscii('karan')
    const tx = await storage.createUser(username)

    assert.isOk(tx)
  })
})
