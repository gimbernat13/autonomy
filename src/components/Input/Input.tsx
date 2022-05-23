import React from "react";
import "./index.scss";
import ethLogo from "../../assets/eth-logo.png";
type Props = {
  placeholder: string;
  type: string;
  onChange?: () => void;
};

export const Input = ({ placeholder, type }: Props) => {
  return (
    <div className="input-container">
      <div className="input-flex-container">
        <input step="0.01" placeholder={placeholder} type={type} className="amount-input" />
        <img className="logo" src={ethLogo} alt="" />
      </div>
    </div>
  );
};
