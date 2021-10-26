import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 128rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1000;
  padding-top: 4rem;
  margin-bottom: 11%;

  &::after {
    content: '';
    position: absolute;
    top: 22%;
    z-index: -1;
    width: 100vw;
    height: ${({ height }) => height || '100%'};
    background-color: ${({ theme, color }) => theme.colors[color] || theme.colors.primaryBlue};
  }
`;
