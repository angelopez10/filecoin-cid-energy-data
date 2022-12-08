import styled from "styled-components";
import { ReactComponent as Moon } from "../../../assets/moon.svg";
import { ReactComponent as Sun } from "../../../assets/sun.svg";

export const TopbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem;
  background-color: ${({
    theme: {
      colors: {
        background: { topbar },
      },
    },
  }) => topbar};
`;

export const LogoContainer = styled.div`
  display: inline-block;
  border: 3px solid #000;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const LogoCid = styled.div`
  display: inline-block;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.black};
  padding: 0.25rem 1rem;
  min-width: 5rem;
  text-transform: uppercase;
`;

export const LogoPlace = styled.div`
  display: inline-block;
  color: ${({ theme: { colors } }) => colors.black};
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 0.25rem 1rem;
  min-width: 5rem;
  text-transform: capitalize;
`;

export const ThemeIcon = styled.div`
  display: inline-block;
  height: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

export const MoonIcon = styled(Moon)`
  height: 100%;
  font-size: 20px;
`;

export const SunIcon = styled(Sun)`
  height: 100%;
  fill: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

export const InputContainer = styled.div`
  width: 60%;
  box-sizing: border-box;
  padding: 24px 0;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${({
      theme: {
        breakPoints: { small },
      },
    }) => small}) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 50%;
  padding: 6px 12px;
  background-color: ${({
    theme: {
      colors: {
        background: { topbar },
      },
    },
  }) => topbar};
  border: 1px solid rgb(60, 63, 68);
  border-radius: 4px;
  font-size: 13px;
  color: ${({
    theme: {
      colors: { font },
    },
  }) => font};
  height: 40px;
  transition: border 0.15s ease 0s;
  margin-right: 20px;
  :focus {
    outline: none;
    box-shadow: none;
    border-color: rgb(100, 153, 255);
  }
`;
