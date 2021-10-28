import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const AppearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: none;

  @media (max-width: 700px) {
    width: 100%;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
    animation: 0.2s ease-in-out 1 forwards ${AppearAnimation};

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  width: 100%;
  text-decoration: none;
  color: black;
  padding: 2rem;
  text-align: center;

  &.${activeClassName} {
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    color: white;
    border-radius: 1.6rem;
  }
`;
