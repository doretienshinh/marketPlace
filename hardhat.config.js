require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: './artifacts',
  },
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/f960979a43b540ecb0657c7fd6d3d6ae", //Infura url with projectId
      accounts: ["882b8f02b16329199872cc0fa2930a7a1a503f99712a9072ae91936dbafe790e"] // add the account that will deploy the contract (private key)
     },
   }
};
