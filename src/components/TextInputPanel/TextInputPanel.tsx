import React from "react";
import styled from "styled-components";

type Props = {
  children: any;
};
const StyledInputPanel = styled.div`
  border-radius: 20px;
  border: 1px solid rgb(25, 27, 31);
  background-color: rgb(33, 36, 41);
  width: initial;
  padding: 1rem;
`;

export const TextInputPanel = ({ children }: Props) => {
  return <StyledInputPanel>{children}</StyledInputPanel>;
};
