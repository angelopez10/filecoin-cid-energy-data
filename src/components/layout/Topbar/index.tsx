import React, { useState } from "react";
import { CidAPI } from "../../../api/cid";
import { Button } from "../../common/Button/Button";
import {
  LogoCid,
  LogoContainer,
  TopbarContainer,
  LogoPlace,
  ThemeIcon,
  MoonIcon,
  SunIcon,
  InputContainer,
  Input,
} from "./Topbar.styles";

interface TopbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

function Topbar({ theme, toggleTheme }: TopbarProps) {
  const [cid, setCid] = useState("");

  const handleChange = (e: any) => {
    setCid(e.target.value);
  };

  const handleSubmit = () => {
    CidAPI.get(
      "bafybeihrfvw2onvcosl4psa7qgmr563amxpdqu2ze6xx6uwp5hlafr3qpq"
    ).then((res) => console.log(res));
  };

  return (
    <TopbarContainer>
      <LogoContainer>
        <LogoCid>CID</LogoCid>
        <LogoPlace>Place</LogoPlace>
      </LogoContainer>
      <InputContainer>
        <Input
          placeholder="Place your Filecoin CID here"
          onChange={(e) => handleChange(e)}
        />
        <Button onClick={handleSubmit}>Search</Button>
      </InputContainer>
      <ThemeIcon onClick={toggleTheme}>
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </ThemeIcon>
    </TopbarContainer>
  );
}

export default Topbar;
