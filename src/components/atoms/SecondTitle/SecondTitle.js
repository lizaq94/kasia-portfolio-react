import styled from 'styled-components';

export const SecondTitle = styled.h2`
  marhin: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 600;
  line-height: 5.2rem;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  text-align: center;
  white-space: pre-wrap;
`;

export const SecondTitleLowerCase = styled(SecondTitle)`
  padding-top: 10rem;
  text-transform: none;
`;
