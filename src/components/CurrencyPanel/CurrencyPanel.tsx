import { Field } from "formik";
import React from "react";
import styled from "styled-components";
import { Input } from "../Input/Input";

type Props = {
  balance: any;
  handleMaxInput: any;
  value: any;
};
const StyledCurrencyPanel = styled.div`
  border-radius: 20px;
  background: ${({ theme }) => theme.inputBg};
  width: initial;
  border: ${({ theme }) => theme.border};
  padding: 1rem;
  &:hover {
    border: ${({ theme }) => theme.borderHover};
  }
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
  border: none;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  margin-left: 0.25rem;
  opacity: 1;
  padding: 4px 6px;
  pointer-events: initial;
  cursor: pointer;
  background-color: ${({ theme }) => theme.maxBg};
  color: ${({ theme }) => theme.maxColor};
`;

export const CurrencyPanel = ({ balance, value, handleMaxInput }: Props) => {
  return (
    <StyledCurrencyPanel>
      <StyledTopPanel>
        <Field
          name="amount"
          as={Input}
          placeholder="Amount"
          type="number"
          id="amount"
          value={value}
        />
        <div>ETH</div>
      </StyledTopPanel>
      <StyledBottomPanel>
        <StyledBottomPanelText>
          Balance : {balance}
          <StyledMaxButton onClick={handleMaxInput}>MAX</StyledMaxButton>
        </StyledBottomPanelText>
      </StyledBottomPanel>
    </StyledCurrencyPanel>
  );
};
