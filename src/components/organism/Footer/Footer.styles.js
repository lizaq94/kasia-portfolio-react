import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  bottom: 0;
  width: 100%;
  max-width: 128rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6.4rem 0;
  border-top: 2px solid #e6e6e6;

  @media (max-width: 1280px) {
    max-width: 102.4rem;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
  @media (max-width: 800px) {
    justify-content: space-around;
    padding: 3rem 0;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    align-items: flex-start;
    padding: 3rem 5rem;
  }
`;

export const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.4rem;
  letter-spacing: -0.03em;

  @media (max-width: 800px) {
    font-size: 1.6rem;
  }

  @media (max-width: 700px) {
    margin-bottom: 1rem;
  }

  span {
    font-weight: 400;
    color: #0d0d0d;
    opacity: 0.64;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  line-height: 1.8rem;
  text-decoration: none;
  color: inherit;
  margin-right: 3.2rem;
  transition: 0.2s all linear;
  overflow: hidden;
  padding-bottom: 0.2rem;
  cursor: pointer;
  position: relative;

  @media (max-width: 800px) {
    font-size: 1.4rem;
    margin-right: 1rem;
    text-align: center;
  }

  @media (max-width: 500px) {
    padding: 0.5rem;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
