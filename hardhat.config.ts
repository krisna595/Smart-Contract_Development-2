import { HardhatUserConfig } from "hardhat/config";
import dotenv from "dotenv"
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers"
import "hardhat-deploy"
import "hardhat-contract-sizer"
import "hardhat-prettier"

dotenv.config()

const {
  MNEMONIC
} = process.env

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.13",
        settings: {
        }
      }
    ]
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: {
        mnemonic: MNEMONIC,
        accountsBalance: "1000000000000000000000000000000"
      }
    },
  },
  paths: {
    deployments: './deployments',
  },
  contractSizer: {
    alphaSort: false,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    only: [':ERC20$'],
  }
};

export default config;
