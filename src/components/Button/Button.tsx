import React from "react";
import styled from "styled-components";
import "./index.scss";
type Props = {
  onClick?: () => void;
  label?: "string";
  children?: any;
  disabled?: boolean;
};
const StyledButton = styled.button`
  padding: 16px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  border-radius: 20px;
  outline: none;
  border: none;
  text-decoration: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  will-change: transform;
  transition: transform 450ms ease 0s;
  transform: perspective(1px) translateZ(0px);
  background: ${({ theme }) => theme.buttonBg};
  color: rgb(80, 144, 234);

  &:hover {
    filter: brightness(1.05);
  }
`;
export const Button = ({ onClick, label, children, disabled }: Props) => {
  return (
    <StyledButton
      disabled={false}
      type="submit"
      onClick={onClick}
      className="button"
    >
      {children}
    </StyledButton>
  );
};
