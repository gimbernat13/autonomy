import React from "react";
import styled from "styled-components";

type Props = {
  children: any;
};
const StyledTextPanel = styled.div`
  border-radius: 20px;
  border: 1px solid rgb(25, 27, 31);
  border: ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.inputBg};
  width: initial;
  padding: 1rem;
  &:hover {
    border: ${({ theme }) => theme.borderHover};
  }
`;

export const TextInputPanel = ({ children }: Props) => {
  return <StyledTextPanel>{children}</StyledTextPanel>;
};
