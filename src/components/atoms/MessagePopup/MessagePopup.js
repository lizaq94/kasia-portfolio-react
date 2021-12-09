import styled, { keyframes } from 'styled-components';

const appersAnimation = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const MessagePopup = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.primaryBlue};
  color: white;
  width: 40rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  animation: ${appersAnimation} 0.1s ease-in;
`;
