import styled from "styled-components";
import { Loader } from '../../components/common/Loader';

export const MainLayoutContainer = styled.div<{centeredContent?: boolean}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({centeredContent}) => centeredContent && `
    justify-content: center;
  `};
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: cyan;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.span`
  font-size: 64px;
  color: ${({theme: {colors: {primary}}}) => primary};
  font-weight: bold;  
`;

export const StyledLoader = styled(Loader)`
  width: 160px;
  height: 160px;
  margin-top: 65px;  

`;

export const ErrorText = styled(LoadingText)`
  font-size: 48px;
  color: ${({theme: {colors: {font}}}) => font};
`;