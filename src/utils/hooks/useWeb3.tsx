import React, { useEffect, useState } from "react";
import Web3 from "web3";

declare var window: any;

export const useWeb3 = () => {
  let provider = window.ethereum;
  const web3 = new Web3(provider);
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
      window.alert("Install Metamask ");
    }
    return provider;
  };

  useEffect(() => {
    detectProvider();
  });

  const onLoginHandler = async () => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error("Error connecting wallet");
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
  return {
    web3,
    isConnected,
    currentAccount,
    balance,
    isConnecting,
    onLoginHandler,
    currentChain,
  };
};
