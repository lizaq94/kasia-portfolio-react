import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.4rem;
  margin: 3.2rem 0 4rem 0;
`;

export const InfoParagraph = styled(Paragraph)`
  font-weight: 600;
  font-size: 36px;
  line-height: 64px;
  letter-spacing: -0.03em;
  margin: 3rem 0;

  &:last-of-type {
    margin-bottom: 5rem;
  }
`;
