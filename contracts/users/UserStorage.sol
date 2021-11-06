// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract UserStorage {
  mapping(uint256 => Profile) profiles;

  struct Profile {
    uint256 id;
    bytes32 username;
  }
}
