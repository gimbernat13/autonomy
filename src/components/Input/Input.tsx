import React from "react";
import "./index.scss";

type Props = {
    placeholder: string
    type: string
};

export const Input = ({placeholder, type}: Props) => {
    
  return (
    <div className="input-container">
      <input
        placeholder={placeholder}
        type={type}
        className="amount-input"
      />
      
    </div>
  );
};
