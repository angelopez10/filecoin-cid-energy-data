import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Topbar from "./components/layout/Topbar";
import MainLayout from "./containers/MainLayout";
import { darkTheme } from "./theme/darkTheme";
import { GlobalStyle } from "./theme/GlobalStyles";
import { lightTheme } from "./theme/lightTheme";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Topbar theme={theme} toggleTheme={toggleTheme} />
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
