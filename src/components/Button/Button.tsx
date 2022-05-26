import React from "react";
import styled from "styled-components";
import { JsxElement } from "typescript";
import "./index.scss";
type Props = {
  onClick: () => void;
  label?: "string";
  children?: any;
};
const StyledButton = styled.button`
  padding: 16px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  border-radius: 20px;
  outline: none;
  /* border: 1px solid rgb(237, 238, 242); */
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
  font-family: "Roboto Mono", monospace;

  /* background-color: rgb(205, 230, 254); */
  &:hover {
    filter: brightness(1.05);
  }
`;
export const Button = ({ onClick, label, children }: Props) => {
  return (
    <StyledButton onClick={onClick} className="button">
      {children}
    </StyledButton>
  );
};
