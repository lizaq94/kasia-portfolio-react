import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0rem 0;
  position: relative;
  top: 6rem;
  margin: 3rem;
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
