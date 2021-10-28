import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 6.4rem;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 16px 24px;
  box-shadow: 0px 13px 55px -12px rgba(25, 33, 78, 0.24);
  border-radius: 16px;
  background-color: white;

  @media (max-width: 800px) {
    margin-bottom: 3rem;
  }
  @media (max-width: 700px) {
    margin-bottom: 1rem;
  }

  svg {
    margin-right: 1.6rem;
  }
`;
