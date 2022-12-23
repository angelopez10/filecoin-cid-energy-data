import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const SingleHeader = styled.div`
width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  color: ${({ theme: { colors: { font } } }) => font};
  font-size: 16px;
  text-align: center;
  padding: 10px;
  border: 1px solid ${({ theme: { colors: { primary } } }) => primary};
  font-weight: bold;
`;