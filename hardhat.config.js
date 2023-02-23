require("@nomiclabs/hardhat-waffle");

module.exports = {
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
		goerli: {
			url: "https://eth-goerli.g.alchemy.com/v2/GcvlT_MHUC6Cd8wETuCwxPHtmeiFFPn-",
			accounts: [
				`0xc2ec47eb650f40947330cde98f2ec061b04601c176cfe43f24ad06efd50bfb7e`,
			],
		},
	},
};
