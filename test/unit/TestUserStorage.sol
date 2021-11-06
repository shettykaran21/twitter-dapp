// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

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
