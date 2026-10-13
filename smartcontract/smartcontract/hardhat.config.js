require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.7.3",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/alch_Lh05CAvE4xfHcZLxbZV91",
      accounts: ['1c3f00ac259f31d3409d3e649ba068583e2461ed0d1f521cc377338b12e4ed47']
    }
  }
};