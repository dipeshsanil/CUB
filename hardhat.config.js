require("@nomiclabs/hardhat-waffle");

module.exports = {
<<<<<<< HEAD
	solidity: "0.8.4",
	experiments: {
		topLevelAwait: true,
	},
	paths: {
		artifacts: "./src/backend/artifacts",
		sources: "./src/backend/contracts",
		cache: "./src/backend/cache",
		tests: "./src/backend/test",
	},
	networks: {
		// goerli: {
		// 	url: "https://eth-goerli.g.alchemy.com/v2/_VrVP1xGZG277SebNcJre_Vd5SEiRUgC",
		// 	accounts: [
		// 		`0x6d3c5f5198de403706b0080f54aa1761f31bf4f75a6ddcea18e4893f745360a8`,
		// 	],
		// },
		goerli: {
			url: "https://eth-goerli.g.alchemy.com/v2/BAtLbrgzm99sZ-K7x2Z57jxwY4yTN7KI",
			accounts: [
				`0x4ab83027300d8f4ef1c9302b109a22bb640b2517c94e903975df78a72857eb91`,
			],
		},
	},
=======
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
>>>>>>> a399419e9f744f9d3a6c686c7345b99fd78ac411
};
