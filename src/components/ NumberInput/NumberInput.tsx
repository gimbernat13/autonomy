import React from "react";
import "./index.scss";
import ethLogo from "../../assets/eth-logo.png";
import styled from "styled-components";
import { useDarkMode } from "../../utils/hooks/useDarkmode";
import { GLOBAL_THEME } from "../../utils/styleVariables";

type Props = {
  placeholder?: string;
  type: string;
  onChange?: () => void;
};

const StyledInputContainer = styled.div`
  background: ${({ theme }) => theme.inputBg};
  border-radius: ${GLOBAL_THEME.borderRadius};
  padding: 16px;
  /* border: ${GLOBAL_THEME.border}; */

  /* &:hover {
    border: 1px solid rgb(206, 208, 217);
  }
  &.focus {
    border: 1px solid rgb(206, 208, 217);
  } */
`;
const StyledInput = styled.input`
  border-radius: 20px;
  position: relative;
  font-weight: 500;
  font-size: 18px;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  color: ${({ theme }) => theme.text};
  font-family: "Roboto Mono", monospace !important;
`;

export const NumberInput = ({ placeholder, type }: Props) => {
  const [theme, setTheme] = useDarkMode();

  const twoDecimals = (input: number) => {
    return input.toFixed(2);
  };
  return (
    <StyledInputContainer>
      <div className="input-flex-container">
        <StyledInput
          step="0.01"
          placeholder={placeholder}
          type={type}
          className="amount-input"
          defaultValue={twoDecimals(0)}
        />
        <img className="logo" src={ethLogo} alt="" />
      </div>
    </StyledInputContainer>
  );
};
