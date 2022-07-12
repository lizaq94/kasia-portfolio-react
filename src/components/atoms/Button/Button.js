import styled from 'styled-components';

export const Button = styled.button`
  padding: 1.4rem 2rem;
  background: ${({ isPrimary }) => (isPrimary ? ({ theme }) => theme.colors.primaryBlue : `rgba(51, 116, 242, 0.12)`)};
  text-transform: uppercase;
  color: ${({ isPrimary }) => (isPrimary ? ({ theme }) => 'white' : ({ theme }) => theme.colors.primaryBlue)};
  border: none;
  border-radius: 1.2rem;
  text-decoration: none;
  font-size: 1.2rem;
  display: inline-block;
  cursor: pointer;
  transition: transform 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;
