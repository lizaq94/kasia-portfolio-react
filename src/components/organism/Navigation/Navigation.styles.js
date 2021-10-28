import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  justify-self: flex-start;
  width: 100%;
  max-width: 128rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 0;

  @media (max-width: 1280px) {
    max-width: 102.4rem;
  }
  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const StyledLogo = styled(NavLink)`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 2.4rem;
  letter-spacing: -0.03em;
  width: 50%;
  text-decoration: none;
  color: black;
  transition: transform 0.2s linear;

  &:hover {
    transform-origin: center;
    transform: scale(1.01);
  }
  @media (max-width: 1280px) {
    width: auto;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
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
    font-size: 1.6rem;
    margin-right: 2rem;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &.${activeClassName} {
    &::after {
      opacity: 1;
      left: 0;
    }
  }

  &::after {
    content: '';
    width: 100%;
    height: 0.2rem;
    position: absolute;
    bottom: 0;
    left: -100%;
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    opacity: 0;
    transition: 0.2s left, 0.2s opacity;
    z-index: 1000;
  }

  &:last-of-type::after {
    display: none;
  }

  &:hover&::after {
    left: 0;
    opacity: 1;
  }
`;

export const SpecialStyledLink = styled(StyledLink)`
  padding: 1.8rem 2.4rem;
  background: ${({ theme }) => theme.colors.primaryBlue};
  text-transform: uppercase;
  color: white;
  border-radius: 1.2rem;
  display: inline-block;
`;
