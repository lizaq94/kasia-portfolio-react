import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 128rem;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1000;
  padding-top: 4rem;
  margin-bottom: 11%;

  @media (max-width: 1280px) {
    width: 110%;
  }

  @media (max-width: 1150px) and (min-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 1024px) and (min-width: 800px) {
    width: 95%;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 0;
    padding-bottom: 3rem;
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 22%;
    z-index: -1;
    width: 100vw;
    height: ${({ height }) => height || '100%'};
    background-color: ${({ theme, color }) => theme.colors[color] || theme.colors.primaryBlue};

    @media (max-width: 800px) {
      top: 0%;
    }
  }
`;
