// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import 'truffle/Assert.sol';
import 'truffle/DeployedAddresses.sol';
import '../../contracts/tweets/TweetStorage.sol';

contract TestTweetStorage {
  function testCreateTweet() public {
    TweetStorage _storage = TweetStorage(DeployedAddresses.TweetStorage());

    uint256 _userId = 1;
    uint256 _expectedTweetId = 1;

    Assert.equal(
      _storage.createTweet(_userId, 'Hello world!'),
      _expectedTweetId,
      'Create tweet with ID 1'
    );
  }
}
