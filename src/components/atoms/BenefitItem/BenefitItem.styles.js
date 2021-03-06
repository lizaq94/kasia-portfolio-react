import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 2rem;

  @media (max-width: 800px) {
    width: 100%;
  }

  svg {
    @media (max-width: 425px) {
      width: 8rem;
      height: 8rem;
    }
  }
`;

export const StyledParagraph = styled.div`
  font-size: 2rem;
  font-weight: 600;
  line-height: 3.2rem;
  letter-spacing: -0.02em;
  padding-top: 3.2rem;

  @media (max-width: 425px) {
    font-size: 1.8rem;
  }
`;
