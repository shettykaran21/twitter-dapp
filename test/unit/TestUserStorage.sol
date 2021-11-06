pragma solidity ^0.8.9;

import 'truffle/Assert.sol';
import 'truffle/DeployedAddresses.sol';
import '../../contracts/users/UserStorage.sol';

contract TestUserStorage {
  function testCreateFirstUser() public {
    UserStorage _storage = UserStorage(DeployedAddresses.UserStorage());

    uint256 _expectedId = 1;

    Assert.equal(
      _storage.createUser('karan'),
      _expectedId,
      'Create user with ID 1'
    );
  }
}
