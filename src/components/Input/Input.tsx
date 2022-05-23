import React from "react";
import "./index.scss";
import ethLogo from "../../assets/eth-logo.png";
import styled from "styled-components";


type Props = {
  placeholder?: string;
  type: string;
  onChange?: () => void;
};


const Container = styled.div`
  width: 100%;
  /* padding: 20px; */
  cursor: pointer;
`;


export const Input = ({ placeholder, type }: Props) => {
  const [value, setValue] = React.useState(0);

  const twoDecimals = (input: number) => {
    return input.toFixed(2);
  };
  return (
    <div className="input-container">
      <div className="input-flex-container">
        <input
          value={twoDecimals(0)}
          step="0.01"
          placeholder={placeholder}
          type={type}
          className="amount-input"
        />
        <img className="logo" src={ethLogo} alt="" />
      </div>
    </div>
  );
};
