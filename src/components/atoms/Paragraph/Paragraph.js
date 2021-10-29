import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.4rem;
  margin: 3.2rem 0 4rem 0;
`;

export const InfoParagraph = styled(Paragraph)`
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 6.4rem;
  letter-spacing: -0.03em;
  margin: 3rem 0;

  @media (max-width: 425px) {
    font-size: 3rem;
    line-height: 5rem;
  }

  &:last-of-type {
    margin-bottom: 5rem;
  }
`;
