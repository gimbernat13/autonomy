import React from "react";
import "./App.scss";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./config/theme";
import { TxForm } from "./components/TxForm/TxForm";
import { useWeb3 } from "./utils/hooks/useWeb3";
import { Nav } from "./components/Nav/Nav";
import { useDarkMode } from "./utils/hooks/useDarkmode";

function App() {
  const { theme, themeToggler } = useDarkMode();
  const { currentChain } = useWeb3();
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className={theme === "light" ? "light-theme" : "dark-theme"}>
        <Nav theme={theme} themeToggler={themeToggler} />
        <TxForm message="Scheduled Transfer" />
        {Number(currentChain) !== 3 && <div>Please use Ropsten Testnet</div>}
      </div>
    </ThemeProvider>
  );
}

export default App;
