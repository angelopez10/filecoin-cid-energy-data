import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  margin-right: 30px;

  @media screen and (max-width: ${({
  theme: {
    breakPoints: { superLarge },
  } }) => superLarge}) {
    width: 100%;
  };
`;

export const DataBlock = styled.div`
  margin: 50px 0;
  text-align: center;

  :first-child{
    margin-top: 0px;
    width: auto;
  }

  :last-child{
    margin-bottom: 0px;
  }
`;

export const DataLabel = styled.span<{ isTitle?: boolean }>`
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme: { colors: { font } } }) => font};

  ${({ isTitle }) => isTitle && `
    font-size: 42px;
  `};
`;

export const DataText = styled(DataLabel)`
  font-size: 18px;
  margin-top: 12px;
  font-weight: normal;
`;

export const ColumnsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BlocksColumn = styled.div`
  width: 150px;

  :first-child{
    margin-right: 25px;
  }
`;