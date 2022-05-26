const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

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
const registryAddress = "0x3C901dc595105934D61DB70C2170D3a6834Cb8B7";

const ethSenderContract = new ethers.Contract(
  ethSenderAddress,
  ETH_SENDER_ABI,
  // provider,
  signer
);

console.log("contract ", ethSenderContract);

const REGISTRY_ABI = ["function newReq() external payable returns (uint id)"];
const registryContract = new ethers.Contract(
  registryAddress,
  REGISTRY_ABI,
  provider
);

const callReg = async () => {
  const response = await registryContract.newReq(objects1);
  console.log(response);
};

const newReqObject = {
  target: ethSenderAddress,
  referer: "0x00..00",
  callData: allData = ethSender.methods.sendEthAtTime(time, userAddress).encodeABI(),
  ethForCall: 1,
  verifyUser: false,
  insertFeeAmount: false,
  paywithAUTO: false,
  value: 2,
};
