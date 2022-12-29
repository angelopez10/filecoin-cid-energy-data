import { ChangeEvent } from "react";
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
  value:string;
  theme: "light" | "dark";
  toggleTheme: () => void;
  setCid: (cid: string) =>  void;
  handleSubmit: () => void;
  setError: (error?: string) => void;
  error?: string;
}

function Topbar({ theme, toggleTheme, setCid, handleSubmit, setError, error,value}: TopbarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCid(e.target.value);
    if(error) setError('');
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
          value={value}
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
