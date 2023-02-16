require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  experiments: {
    topLevelAwait: true
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/S3HNsJ4nS3yq0jZojFJonlOgn9AJFbqq',
      accounts: [`0x6d3c5f5198de403706b0080f54aa1761f31bf4f75a6ddcea18e4893f745360a8`]
    }
  },
};
