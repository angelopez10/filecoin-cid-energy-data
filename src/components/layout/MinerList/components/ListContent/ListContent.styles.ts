import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const ListRow = styled.div`
  width: 110px;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { colors: { font } } }) => font};
  font-size: 14px;
  padding: 10px;
  border: 1px solid ${({ theme: { colors: { primary } } }) => primary};
  text-align: center;
`;