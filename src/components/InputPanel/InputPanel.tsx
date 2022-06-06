import { Field } from "formik";
import React from "react";
import styled from "styled-components";
import { Input } from "../Input/Input";

type Props = {};
const StyledInputPanel = styled.div`
  border-radius: 20px;
  border: 1px solid rgb(25, 27, 31);
  background-color: rgb(33, 36, 41);
  width: initial;
  padding: 1rem;
`;
const StyledTopPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledBottomPanel = styled.div`
  display: flex;

  justify-content: flex-end;
`;
const StyledBottomPanelText = styled.div`
  margin: 0px;
  min-width: 0px;
  font-weight: 500;
  font-size: 14px;
  color: rgb(143, 150, 172);
  display: flex;
  align-items: center;
`;
const StyledMaxButton = styled.div`
  background-color: rgba(21, 61, 111, 0.44);
  border: none;
  border-radius: 12px;
  color: rgb(33, 114, 229);
  cursor: pointer;
  font-size: 11px;
  font-weight: 500;
  margin-left: 0.25rem;
  opacity: 1;
  padding: 4px 6px;
  pointer-events: initial;
`;

export const InputPanel = (props: Props) => {
  return (
    <StyledInputPanel>
      <StyledTopPanel>
        <Field name="amount" as={Input} placeholder="Amount" id="amount" />{" "}
        <div>ETH</div>
      </StyledTopPanel>
      <StyledBottomPanel>
        <StyledBottomPanelText>
          Balance : 5045<StyledMaxButton>MAX</StyledMaxButton>
        </StyledBottomPanelText>
      </StyledBottomPanel>
    </StyledInputPanel>
  );
};
