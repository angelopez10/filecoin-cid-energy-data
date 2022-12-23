import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AggregateAndTabContent = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  margin-top: 36px;

  @media screen and (max-width: ${({
  theme: {
    breakPoints: { superLarge },
  } }) => superLarge}) {
    flex-direction: column;
  };
`;