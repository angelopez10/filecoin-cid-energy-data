import styled from 'styled-components';

export const Container = styled.div`
  max-height: 650px;
  width: 100%;
  overflow: auto;

  @media screen and (max-width: ${({
  theme: {
    breakPoints: { superLarge },
  } }) => superLarge}) {
    margin: 32px auto;
    width: 85%;
  };
`;