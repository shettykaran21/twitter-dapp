// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './Owned.sol';

contract BaseStorage is Owned {
  address public controllerAddr;

  function setControllerAddr(address _controllerAddr) public {
    require(msg.sender == ownerAddr);

    controllerAddr = _controllerAddr;
  }
}
