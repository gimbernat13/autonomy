import React from "react";
import styled from "styled-components";
import { useWeb3 } from "../../utils/hooks/useWeb3";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

type Props = {
  // FIXME: Avoid prop drilling w/ hook Fix
  theme: string | null;
  themeToggler: () => void;
};

const StyledNav = styled("div")`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLogo = styled("img")`
  height: 40px;
`;
const StyledRightSidePanel = styled("div")`
  display: flex;
  align-items: center;
`;
const StyledSelector = styled("div")`
  -webkit-box-align: center;
  align-items: center;
  background: ${({ theme }) => theme.cardBg};
  border: ${({ theme }) => theme.border};
  border-radius: 16px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  font-weight: 500;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 8px 12px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 5px;
`;

export const Nav = ({ theme, themeToggler }: Props) => {
  const chainIds: { [key: number]: string } = {
    1: "Ethereum",
    2: "Rinkeby",
    3: "Ropsten Testnet",
  };

  const { balance, currentAccount, currentChain } = useWeb3();

  return (
    <StyledNav>
      <StyledLogo
        src="https://uploads-ssl.webflow.com/623d3c9e548e1a3b4dc0d912/623d3c9e548e1a4624c0d9e1_autonomy-network-logo-mark-white.svg"
        alt=""
      />
      <StyledRightSidePanel>
        <StyledSelector> {balance} ETH</StyledSelector>
        <StyledSelector> {chainIds[currentChain]}</StyledSelector>
        <StyledSelector> {currentAccount}</StyledSelector>
        <StyledSelector>
          <ThemeSwitcher theme={theme} themeToggler={themeToggler} />
        </StyledSelector>
      </StyledRightSidePanel>
    </StyledNav>
  );
};
