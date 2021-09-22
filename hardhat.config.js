require('@nomiclabs/hardhat-waffle');
const fs = require('fs');
// https://hardhat.org/guides/create-task.html
// Go to https://hardhat.org/config/

const privateKey = fs.readFileSync('.secretid').toString().trim() || '';
const infuraId = fs.readFileSync('.infuraid').toString().trim() || '';

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      // url: 'https://ipfs.infura.io:5001/1yOy5GWLiswH7hPZu3mEjvsd2wG',
      // url: 'https://polygon-mumbai.infura.io/v3/1270e7238e4e49e68bd723b96f2262df',
      url: 'https://polygon-mumbai.infura.io/v3/1270e7238e4e49e68bd723b96f2262df',
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/1270e7238e4e49e68bd723b96f2262df`,
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
};
