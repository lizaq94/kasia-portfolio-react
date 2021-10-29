import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  line-height: 7.2rem;
  letter-spacing: -0.03em;
  text-align: center;
  margin: 0;
  white-space: pre-wrap;

  @media (max-width: 425px) {
    font-size: 4.6rem;
  }
`;
