const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    // ropsten: {
    //   provider: () =>
    //     new HDWalletProvider(
    //       mnemonic,
    //       `https://eth-ropsten.alchemyapi.io/v2/${projectId}`
    //     ),
    //   network_id: 3, // Ropsten's id
    //   gas: 5500000, // Ropsten has a lower block limit than mainnet
    //   confirmations: 2, // # of confs to wait between deployments. (default: 0)
    //   timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    // },
    // kovan: {
    //   provider: () =>
    //     new HDWalletProvider(
    //       mnemonic,
    //       `https://eth-kovan.alchemyapi.io/v2/${projectId}`
    //     ),
    //   network_id: 42,
    // },
    goerli: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          `https://eth-goerli.alchemyapi.io/v2/${process.env.PROJECT_ID}`
        ),
      network_id: 5,
    },
  },
  compilers: {
    solc: {
      version: '0.8.9',
    },
  },
}
