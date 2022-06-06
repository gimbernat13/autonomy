import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Input } from "../Input/Input";
import { DateTimePicker } from "../DateTimePicker/DateTime";
import { InputPanel } from "../InputPanel/InputPanel";
import { TextInputPanel } from "../TextInputPanel/TextInputPanel";

export const MyForm: React.FC<{
  balance: any;
  message: string;
  isConnected: boolean;
  isConnecting: boolean;
  onLoginHandler: any;
  ethSenderContract: any;
  registryContract: any;
  selectedAccount: any;
  web3: any;
}> = ({
  isConnected,
  isConnecting,
  onLoginHandler,
  message,
  ethSenderContract,
  registryContract,
  selectedAccount,
  balance,
  web3,
}) => {
  const toTimestamp = (input: any) => {
    var timestamp = new Date(input).getTime();
    return timestamp;
  };
  const ethSenderAddress = "0xfa0a8b60b2af537dec9832f72fd233e93e4c8463";

  return (
    <div>
      <Formik
        initialValues={{
          amount: 0,
          address: "",
          dateAndTime: "",
        }}
        onSubmit={(values: any, actions: any) => {
          const { dateAndTime, address, amount } = values;
          const amountToWei = web3.utils.toWei(amount.toString(), "ether");
          const newReqObject1 = {
            target: ethSenderAddress,
            referer: "0x0000000000000000000000000000000000000000",
            callData: ethSenderContract.methods
              .sendEthAtTime(toTimestamp(dateAndTime), address.toString())
              .encodeABI(),
            ethForCall: amountToWei,
            verifyUser: false,
            insertFeeAmount: false,
            payWithAUTO: false,
            isAlive: false,
          };

          const {
            target,
            referer,
            callData,
            ethForCall,
            verifyUser,
            insertFeeAmount,
            isAlive,
          } = newReqObject1;

          const callReg = async () => {
            const response = await registryContract.methods
              .newReq(
                target,
                referer,
                callData,
                ethForCall,
                verifyUser,
                insertFeeAmount,
                isAlive
              )
              .send({
                from: selectedAccount,
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
                  <InputPanel
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
                  {/* <Field
                 id="address"
                 name="address"
                 as={Input}
                 type="text"
                 placeholder="Wallet Address"
               /> */}

                  {/* <Field
                 id="amount"
                 name="amount"
                 as={Input}
                 type="number"
                 placeholder="Amount of ETH"
               /> */}

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
