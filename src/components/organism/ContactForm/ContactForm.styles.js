import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 82rem;
  padding: 5rem 0 5rem 0;
  font-size: 1.8rem;

  @media (max-width: 800px) {
    padding: 5rem 2rem 5rem 2rem;
  }

  & > * {
    margin-bottom: 3rem;
  }
`;
