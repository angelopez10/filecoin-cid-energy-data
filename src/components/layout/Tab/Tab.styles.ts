import styled from 'styled-components';

export const Container = styled.div`
  width: 33%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid rgb(60, 63, 68);
  margin-top: 40px;
`;

export const SingleTab = styled.div<{ active?: boolean }>`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: inherit;
  font-weight: bold;
  color: ${({ theme: { colors: { font } } }) => font};
  :hover{
    opacity: 0.5;
  };

  ${({ theme: { colors: { primary, black } }, active }) => active && `
    background-color: ${primary};
    color: ${black};
    cursor: auto;
    :hover{
      opacity: 1;
    }
  `}
`