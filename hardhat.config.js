require("@nomiclabs/hardhat-waffle");

// https://hardhat.org/guides/create-task.html
// Go to https://hardhat.org/config/


const projectId = "1270e7238e4e49e68bd723b96f2262df"


module.exports = {
  networks:{
    hardhat:{
      chainId:1337,
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts:[]
    },
    mainnet:{
      url:`https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts:[]
    }
  },
  solidity: "0.8.4",
};
