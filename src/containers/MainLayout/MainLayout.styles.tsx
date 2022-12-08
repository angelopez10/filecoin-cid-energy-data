import styled from "styled-components";

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
