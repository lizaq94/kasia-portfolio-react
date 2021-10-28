import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  width: 100%;
  padding: 10rem 0 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    padding: 10rem 4.6rem;
  }

  ${Button} {
    margin-right: 1.6rem;
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
  line-height: 2rem;
  letter-spacing: -0.03em;
  margin-bottom: 2.4rem;

  &:last-of-type {
    margin-bottom: 4rem;
  }
`;
