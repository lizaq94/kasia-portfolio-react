import styled from 'styled-components';

export const Wrapper = styled.form`
  position: relative;
  width: 100%;
  max-width: 82rem;
  padding: 5rem 0 5rem 0;
  font-size: 1.8rem;

  @media (max-width: 800px) {
    padding: 5rem;
  }

  & > * {
    margin-bottom: 3rem;
  }
`;

export const DoubleFormFieldWrapper = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  div {
    flex: 1;

    &:first-child {
      margin-right: 2rem;

      @media (max-width: 800px) {
        margin: 0 0 3rem 0;
      }
    }
  }
`;
