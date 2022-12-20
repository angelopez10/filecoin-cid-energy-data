import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { CidAPI } from "./api/cid";

import Topbar from "./components/layout/Topbar";
import MainLayout from "./containers/MainLayout";
import { darkTheme } from "./theme/darkTheme";
import { GlobalStyle } from "./theme/GlobalStyles";
import { lightTheme } from "./theme/lightTheme";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [cid, setCid] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [loading,setLoading] = useState(false)
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleSubmit = async () => {
    try {
      // const res = await CidAPI.get(cid);
      setLoading(true)
      const {miners} = await CidAPI.get(
       cid
      );
      setData(miners);
      console.log({ miners });
      setLoading(false)
    } catch (err) {
      setError("Sorry, we didn't find any miners related to that CID :(");
      console.log("handleSubmit err: ", err);
      setLoading(false)
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Topbar
        theme={theme}
        toggleTheme={toggleTheme}
        setCid={setCid}
        handleSubmit={handleSubmit}
        setError={setError}
        error={error}
      />
      {loading && 'loading...'}
      <MainLayout data={data} error={error} />
    </ThemeProvider>
  );
}

export default App;
