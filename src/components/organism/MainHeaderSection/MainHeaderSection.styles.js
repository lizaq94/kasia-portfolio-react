import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import backgroundImage from 'assets/image/background-image.png';

export const Wrapper = styled.div`
  width: 100%;
  padding: 10rem 0 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundImage});

  @media (max-width: 1024px) {
    background-image: unset;
  }

  @media (max-width: 700px) {
    padding: 10rem 5rem;
  }

  @media (max-width: 425px) {
    padding: 5rem;
  }
`;

export const StyledList = styled.ul`
  text-align: center;
  list-style-position: inside;
  margin-top: 4rem;
  padding: 0;
`;

export const StyledListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 400;
  line-height: 1.6rem;
  margin-bottom: 2.4rem;

  @media (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-bottom: 2rem;
  }

  &:last-of-type {
    margin-bottom: 4rem;
  }
`;

export const StyledButton = styled(Button)`
  margin-right: 1.6rem;

  @media (max-width: 425px) {
    margin: 0 0 1rem 0;
  }
`;
