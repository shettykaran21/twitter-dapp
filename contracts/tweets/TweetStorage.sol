// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TweetStorage {
  mapping(uint256 => Tweet) public tweets;

  struct Tweet {
    uint256 id;
    string text;
    uint256 userId;
    uint256 postedAt;
  }

  uint256 latestTweetId = 0;

  function createTweet(uint256 _userId, string memory _text)
    public
    returns (uint256)
  {
    latestTweetId++;

    tweets[latestTweetId] = Tweet(
      latestTweetId,
      _text,
      _userId,
      block.timestamp
    );

    return latestTweetId;
  }
}
