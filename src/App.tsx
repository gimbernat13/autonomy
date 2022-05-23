import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { DateTimePicker } from "./components/DateTimePicker/DateTime";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import { ethers } from "ethers";

declare var window: any;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const ETH_SENDER_ABI = [
  {
    inputs: [
      { internalType: "uint256", name: "time", type: "uint256" },
      { internalType: "address payable", name: "recipient", type: "address" },
    ],
    name: "sendEthAtTime",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const ethSenderAddress = "0xfa0a8b60b2af537dec9832f72fd233e93e4c8463";
const ethSenderContract = new ethers.Contract(
  ethSenderAddress,
  ETH_SENDER_ABI,
  provider
);

console.log("contract ", ethSenderContract);

const REGISTRY_ABI = ["function newReq() external payable returns (uint id)"];
const registryAddress = "0x3C901dc595105934D61DB70C2170D3a6834Cb8B7";
const registryContract = new ethers.Contract(
  registryAddress,
  REGISTRY_ABI,
  provider
);

console.log("registry contract ", registryContract);

function App() {
  const [formState, setFormState] = useState({
    amount: null,
    recipient: "",
    timestamp: null,
  });

  return (
    <div className="swap">
      <div className="swap__container">
        <div className="swap__inner">
          <div className="title">Transfer</div>
          <DateTimePicker />
          <Input
            // onChange={(...prevState) => setFormState({ ...prevState })}
            type="number"
            placeholder="Enter the Amount"
          />
          <Input
            // onChange={(...prevState) => setFormState()}
            type="text"
            placeholder="ENS Name or Wallet Address"
          />
          <div className="tag-container">
            <div className="tag">@dgimbernat</div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
