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
}> = ({ isConnected, isConnecting, onLoginHandler, message }) => {
  const toTimestamp = (input: any) => {
    var timestamp = new Date(input).getTime();
    return timestamp;
  };

  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={(values: any, actions: any) => {
          const { dateAndTime, address } = values;
          console.log(toTimestamp(dateAndTime));
          console.log(dateAndTime);
          console.log({ values, actions });
          // alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
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
                placeholder="Wallet Addrssess"
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
