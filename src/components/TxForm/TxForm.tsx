import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Input } from "../Input/Input";
import { DateTimePicker } from "../DateTimePicker/DateTime";

export const MyForm: React.FC<{
  message: string;
  isConnected: boolean;
  isConnecting: boolean;
  onLoginHandler: any;
  ethSenderContract: any;
  registryContract: any;
  selectedAccount: any;
}> = ({
  isConnected,
  isConnecting,
  onLoginHandler,
  message,
  ethSenderContract,
  registryContract,
  selectedAccount,
}) => {
  const toTimestamp = (input: any) => {
    var timestamp = new Date(input).getTime();
    return timestamp;
  };
  const ethSenderAddress = "0xfa0a8b60b2af537dec9832f72fd233e93e4c8463";

  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={(values: any, actions: any) => {
          const { dateAndTime, address } = values;
          const newReqObject1 = {
            target: ethSenderAddress,
            referer: "0x0000000000000000000000000000000000000000",
            callData: ethSenderContract.methods
              .sendEthAtTime(toTimestamp(dateAndTime), address.toString())
              .encodeABI(),
            ethForCall: "10000000000000",
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
                value: "10000000000001",
                gasLimit: 30000,
              });
            console.log(response);
          };

          callReg();
          console.log({ values, actions });
        }}
      >
        <Form>
          <Card>
            <>
              <div className="title">
                <div>{message}</div>
              </div>

              <Field
                id="address"
                name="address"
                as={Input}
                type="text"
                placeholder="Wallet Address"
              />

              <Field
                name="dateAndTime"
                as={DateTimePicker}
                placeholder="Select Date"
                id="dateAndTime"
              />

              <Field
                id="amount"
                name="amount"
                as={Input}
                type="number"
                placeholder="Amount of ETH"
              />

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
      </Formik>
    </div>
  );
};
