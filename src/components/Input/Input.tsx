import React from "react";
import "./index.scss";
import styled from "styled-components";
import { GLOBAL_THEME } from "../../utils/styleVariables";

type Props = {
  placeholder?: string;
  type: string;
  onChange?: () => void;
  value: string | number;
  id: string;
};

const StyledInputContainer = styled.div`
  border-radius: ${GLOBAL_THEME.borderRadius};
  font-weight: "bolder";
  &:hover {
  }
  &.focus {
    border: 1px solid rgb(206, 208, 217);
  }
`;
const StyledInput = styled.input`
  font-size: 28px;
  border-radius: 20px;
  position: relative;
  font-weight: 500;
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

export const Input = ({ placeholder, type, onChange, value, id }: Props) => {
  return (
    <StyledInputContainer>
      <div className="input-flex-container">
        <StyledInput
          id={id}
          onChange={onChange}
          step="0.01"
          placeholder={placeholder}
          type={type}
          value={value ? value : ""}
          className="amount-input"
        />
      </div>
    </StyledInputContainer>
  );
};
