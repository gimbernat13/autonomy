import React, { useState } from "react";
import { Button } from "../Button/Button";
type Props = {
  onLogin: any;
};

declare var window: any;

export const Login = ({ onLogin }: Props) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
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

  return (
    <Button onClick={onLoginHandler}>
      <>
        {!isConnecting && "Connect"}
        {isConnecting && "Loading..."}
      </>
    </Button>
  );
};
