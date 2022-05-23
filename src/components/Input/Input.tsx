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
  border: ${GLOBAL_THEME.border};
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
  font-size: 20px;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

export const Input = ({ placeholder, type }: Props) => {
  const [value, setValue] = React.useState(0);
  const [theme, setTheme] = useDarkMode();

  const twoDecimals = (input: number) => {
    return input.toFixed(2);
  };
  return (
    <StyledInputContainer>
      <div className="input-flex-container">
        <StyledInput
          value={twoDecimals(value)}
          onChange={(e) => setValue(e.target.value)}
          step="0.01"
          placeholder={placeholder}
          type={type}
          className="amount-input"
        />
        <img className="logo" src={ethLogo} alt="" />
      </div>
    </StyledInputContainer>
  );
};
