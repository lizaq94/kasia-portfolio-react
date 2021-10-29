import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 2.4rem;
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;
  margin-right: 2rem;
  box-shadow: 0px 15px 94px -20px rgba(20, 29, 74, 0.24);

  @media (max-width: 1024px) {
    padding: 2.2rem 1.4rem 1.4rem 1.4rem;
    margin-right: 1rem;
  }

  @media (max-width: 800px) {
    margin: 2rem 20%;
  }

  @media (max-width: 425px) {
    margin: 2rem 15%;
  }

  &:last-of-type {
    margin-right: 0;
    @media (max-width: 800px) {
      margin: 2rem 20%;
    }
    @media (max-width: 425px) {
      margin: 2rem 15%;
    }
  }
`;
export const Title = styled.div`
  font-size: 2rem;
  padding-bottom: 2.4rem;
  text-align: left;

  @media (max-width: 425px) {
    text-align: center;
  }
`;
export const PriceItem = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  padding-bottom: 4.8rem;

  @media (max-width: 1024px) {
    padding-bottom: 2rem;
  }
  @media (max-width: 425px) {
    justify-content: center;
  }

  span {
    width: 60%;
    font-size: 2.2rem;
    font-weight: 700;
    text-align: left;

    @media (max-width: 1280px) and (min-width: 800px) {
      width: 80%;
      font-size: 1.8rem;
    }

    @media (max-width: 425px) {
      font-size: 1.8rem;
    }
  }
`;

export const PriceItemBig = styled(PriceItem)`
  span {
    width: auto;
    padding-right: 1.5rem;
    font-size: 4.8rem;

    @media (max-width: 1024px) {
      font-size: 4rem;
    }

    @media (max-width: 425px) {
      padding-right: 1rem;
      font-size: 3.5rem;
    }
  }
`;
