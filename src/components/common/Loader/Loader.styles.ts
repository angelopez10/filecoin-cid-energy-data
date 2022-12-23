import styled from 'styled-components';

export const LoaderComponent = styled.div`
  border: 10px solid ${({ theme: { colors: { lightGray } } }) => lightGray};
  border-top: 10px solid ${({ theme: { colors: { primary } } }) => primary};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;

  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;