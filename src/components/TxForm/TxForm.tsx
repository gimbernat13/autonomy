import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Card } from "../Card/Card";
import { Input } from "../Input/Input";
import { DateTimePicker } from "../DateTimePicker/DateTime";
import { CurrencyPanel } from "../CurrencyPanel/CurrencyPanel";
import { Button } from "../Button/Button";
import { useWeb3 } from "../../utils/hooks/useWeb3";
import { TextInputPanel } from "../TextInputPanel/TextInputPanel";
export const TxForm: React.FC<{
  message: string;
}> = ({ message }) => {
  const {
    web3,
    balance,
    currentAccount,
    isConnected,
    isConnecting,
    onLoginHandler,
  } = useWeb3();

  const toTimestamp = (input: string) => {
    var timestamp = new Date(input).getTime();
    return timestamp;
  };
  const ethSenderAddress = "0xfa0a8b60b2af537dec9832f72fd233e93e4c8463";
  const registryAddress = "0x3C901dc595105934D61DB70C2170D3a6834Cb8B7";

  const ETHSENDER_ABI = require("../../config/ABI/ethSenderAbi.json");
  const REGISTRY_ABI = require("../../config/ABI/registryAbi.json");

  const ethSenderContract = new web3.eth.Contract(
    ETHSENDER_ABI,
    ethSenderAddress
  );
  const registryContract = new web3.eth.Contract(REGISTRY_ABI, registryAddress);

  return (
    <div>
      <Formik
        initialValues={{
          amount: 0,
          address: "",
          dateAndTime: "Execution Date",
        }}
        onSubmit={(values: any, actions: any) => {
          const { dateAndTime, address, amount } = values;
          const amountToWei = web3.utils.toWei(amount.toString(), "ether");
          const parsedValues = {
            target: ethSenderAddress,
            referer: "0x0000000000000000000000000000000000000000",
            callData: ethSenderContract.methods
              .sendEthAtTime(toTimestamp(dateAndTime), address.toString())
              .encodeABI(),
            ethForCall: amountToWei,
            verifyUser: false,
            insertFeeAmount: false,
            payWithAUTO: false,
          };

          const callReg = async () => {
            const response = await registryContract.methods
              .newReq(...Object.values(parsedValues))
              .send({
                from: currentAccount,
                value: amountToWei,
              });
            return response;
          };

          callReg();
        }}
      >
        {({ setFieldValue, values, initialValues }) => {
          const handleMaxInput = () => {
            setFieldValue("amount", balance);
          };

          return (
            <Form>
              <Card>
                <>
                  <div className="title">
                    <div>{message}</div>
                  </div>
                  <CurrencyPanel
                    handleMaxInput={handleMaxInput}
                    balance={balance}
                    value={values.amount}
                  />
                  <TextInputPanel>
                    <Field
                      name="address"
                      as={Input}
                      placeholder="Address"
                      id="address"
                    />
                  </TextInputPanel>
                  <TextInputPanel>
                    <Field
                      name="dateAndTime"
                      as={DateTimePicker}
                      placeholder="Select Date"
                      id="dateAndTime"
                    />
                  </TextInputPanel>

                  {isConnected ? (
                    <Button> Send Transaction </Button>
                  ) : (
                    <Button onClick={onLoginHandler}>
                      <>
                        {!isConnecting && !isConnected && "Connect Wallet"}
                        {isConnecting && !isConnected && "Loading..."}
                      </>
                    </Button>
                  )}
                </>
              </Card>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
