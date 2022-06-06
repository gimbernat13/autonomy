import React, { useEffect, useState } from "react";
import "./App.scss";
import styled, { ThemeProvider } from "styled-components";
import { LightBulb } from "./components/LightBulb/LightBulb";
import { Moon } from "./components/Moon/Moon";
import Web3 from "web3";
import { darkTheme, lightTheme } from "./config/theme";
import { MyForm } from "./components/TxForm/TxForm";
import { Card } from "./components/Card/Card";

declare var window: any;
let provider = window.ethereum;
const web3 = new Web3(provider);

const ethSenderAddress = "0xfa0a8b60b2af537dec9832f72fd233e93e4c8463";
const registryAddress = "0x3C901dc595105934D61DB70C2170D3a6834Cb8B7";
const ETHSENDER_ABI = require("./config/ABI/ethSenderAbi.json");
const REGISTRY_ABI = require("./config/ABI/registryAbi.json");

const ethSenderContract = new web3.eth.Contract(
  ETHSENDER_ABI,
  ethSenderAddress
);

const registryContract = new web3.eth.Contract(REGISTRY_ABI, registryAddress);

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState<any>(null);
  const [balance, setBalance] = useState<any>(0);

  const [isConnecting, setIsConnecting] = useState(false);
  const currentChain = window.ethereum.networkVersion;

  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
      onLogin(provider);
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      window.alert("No Ethereum browser detected! Check out MetaMask");
    }
    return provider;
  };

  useEffect(() => {
    detectProvider();
  });

  const chainIds: { [key: number]: string } = {
    1: "Ethereum",
    2: "R",
    3: "Ropsten Testnet",
  };

  const checkConnectedNetwork = () => {
    if (Number(currentChain) !== 3) {
      return `⚠️ You are connected to an unsupported network, Please Switch to Ropsten`;
    }
    return;
  };

  const onLoginHandler = async () => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error(
          "Not window.ethereum provider. Do you have multiple wallet installed ?"
        );
      }
      setIsConnecting(true);
      await provider.request({
        method: "eth_requestAccounts",
      });

      setIsConnecting(false);
    }
    onLogin(provider);
  };

  const onLogin = async (provider: any) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      const accBalanceEth = web3.utils.fromWei(
        await web3.eth.getBalance(accounts[0]),
        "ether"
      );

      setBalance(Number(accBalanceEth).toFixed(6));
      setIsConnected(true);
    }
  };

  const themeSwitcher = isDarkTheme ? (
    <div>
      <Moon clicked={() => setIsDarkTheme(!isDarkTheme)} />
    </div>
  ) : (
    <LightBulb clicked={() => setIsDarkTheme(!isDarkTheme)} />
  );

  return (
    <ThemeProvider theme={isDarkTheme ? lightTheme : darkTheme}>
      <div className={isDarkTheme ? "light-theme" : "dark-theme"}>
        {Number(currentChain) === 3 ? (
          <MyForm
            web3={web3}
            balance={balance}
            selectedAccount={currentAccount}
            registryContract={registryContract}
            ethSenderContract={ethSenderContract}
            isConnected={isConnected}
            isConnecting={isConnecting}
            message="Scheduled Transfer"
            onLoginHandler={onLoginHandler}
          />
        ) : (
          <Card>
            <div>Please use Ropsten Testnet</div>
          </Card>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
