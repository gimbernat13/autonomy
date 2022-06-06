import React from "react";
import styled from "styled-components";

type Props = {};

const StyledNav = styled("div")`
  width: 98%;
  margin: 10px;
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
  /* max-width: 200px; */
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 5px;
`;

const Nav = (props: Props) => {
  const checkConnectedNetwork = () => {
    if (Number(currentChain) !== 3) {
      return `⚠️ You are connected to an unsupported network, Please Switch to Ropsten`;
    }
    return;
  };

  const themeSwitcher = isDarkTheme ? (
    <div>
      <Moon clicked={() => setIsDarkTheme(!isDarkTheme)} />
    </div>
  ) : (
    <LightBulb clicked={() => setIsDarkTheme(!isDarkTheme)} />
  );
  return (
    <StyledNav>
      <StyledLogo
        src="https://uploads-ssl.webflow.com/623d3c9e548e1a3b4dc0d912/623d3c9e548e1a4624c0d9e1_autonomy-network-logo-mark-white.svg"
        alt=""
      />
      <h3 style={{ color: "lightslategrey" }}>{checkConnectedNetwork()}</h3>

      <StyledRightSidePanel>
        <StyledSelector> {balance} ETH</StyledSelector>
        <StyledSelector> {chainIds[currentChain]}</StyledSelector>
        <StyledSelector> {currentAccount}</StyledSelector>
        <StyledSelector>{themeSwitcher}</StyledSelector>
      </StyledRightSidePanel>
    </StyledNav>
  );
};
