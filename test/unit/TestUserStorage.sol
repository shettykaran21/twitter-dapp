// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import 'truffle/Assert.sol';
import '../../contracts/users/UserStorage.sol';

contract TestUserStorage {
  UserStorage userStorage;

  constructor() {
    userStorage = new UserStorage();
    userStorage.setControllerAddr(address(this));
  }

  function testCreateFirstUser() public {
    uint256 _expectedId = 1;

    Assert.equal(
      userStorage.createUser('karan'),
      _expectedId,
      'Should create user with ID 1'
    );
  }
}
