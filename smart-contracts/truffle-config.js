const HDWalletProvider = require('@truffle/hdwallet-provider')
const fs = require('fs')

const mnemonic = fs.readFileSync('.secret').toString().trim()

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    matic: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://polygon-mumbai.g.alchemy.com/v2/ltMOHK5GvAZ35-VTzN_5e877fAA_ExDV`
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: '0.8.9',
    },
  },
}
