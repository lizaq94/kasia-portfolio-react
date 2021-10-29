import styled from 'styled-components';

export const SecondTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 600;
  line-height: 5.2rem;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  text-align: center;
  white-space: pre-wrap;

  @media (max-width: 425px) {
    font-size: 3.2rem;
    line-height: 5rem;
  }
`;

export const SecondTitleLowerCase = styled(SecondTitle)`
  padding-top: 5rem;
  text-transform: none;

  @media (max-width: 700px) {
    padding: 6rem 5rem 0 5rem;
  }
`;
