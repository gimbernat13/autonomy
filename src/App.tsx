import React, { useEffect, useState } from "react";
import "./App.scss";
import { ThemeProvider } from "styled-components";
import { LightBulb } from "./components/LightBulb/LightBulb";
import { Moon } from "./components/Moon/Moon";
import Web3 from "web3";
import { darkTheme, lightTheme } from "./config/theme";
import { MyForm } from "./components/TxForm/TxForm";

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

  useEffect(() => {
    detectProvider();
  }, []);

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

  let selectedAccount = "";

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

  return (
    <ThemeProvider theme={isDarkTheme ? lightTheme : darkTheme}>
      <div className={isDarkTheme ? "light-theme" : "dark-theme"}>
        {isDarkTheme ? (
          <Moon clicked={() => setIsDarkTheme(!isDarkTheme)} />
        ) : (
          <LightBulb clicked={() => setIsDarkTheme(!isDarkTheme)} />
        )}
        <MyForm
          selectedAccount={currentAccount}
          registryContract={registryContract}
          ethSenderContract={ethSenderContract}
          isConnected={isConnected}
          isConnecting={isConnecting}
          message="Scheduled Transfer"
          onLoginHandler={onLoginHandler}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
