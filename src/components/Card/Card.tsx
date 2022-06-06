import React from "react";
import styled from "styled-components";

type Props = {
  children: JSX.Element;
};
const StyledCard = styled.div`
  position: relative;
  max-width: 480px;
  width: 100%;
  background: rgb(255, 255, 255);
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
    rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
  border-radius: 24px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  z-index: 1;
`;
const StyledCardInner = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 8px;
  padding: 8px;
`;

export const Card = ({ children }: Props) => {
  return (
    <StyledCard>
      <StyledCardInner>{children}</StyledCardInner>
    </StyledCard>
  );
};
