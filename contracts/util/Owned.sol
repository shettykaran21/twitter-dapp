// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Owned {
  address public ownerAddr;

  constructor() public {
    ownerAddr = msg.sender;
  }

  function transferOwnership(address _newOwner) public {
    require(msg.sender === ownerAddr);
    
    require(_newOwner != address(0));

    ownerAddr = _newOwner;
  }
}
