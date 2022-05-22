import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import BasicDateTimePicker from "./components/DateTimePicker/DateTime";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import { ethers } from "ethers";

declare var window: any;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const ABI = [
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

const address = "0xfa0a8b60b2af537dec9832f72fd233e93e4c8463";
const contract = new ethers.Contract(address, ABI, provider);

console.log(provider);

function App() {
  return (
    <div className="swap">
      Diego Gimbernat - Front-End Challenge
      <div className="swap__container">
        <div className="swap__inner">
          <div>Transfer</div>
          <BasicDateTimePicker />
          <Input type="number" placeholder="Enter the Amount" />
          <Input type="text" placeholder="Enter the Recipient" />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
