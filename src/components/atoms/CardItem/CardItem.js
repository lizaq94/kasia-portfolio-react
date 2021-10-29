import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 0;
  border-bottom: 1px solid #e6e6e6;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
    flex-direction: column;
    justify-content: center;
  }

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 4.8rem;

    @media (max-width: 1024px) {
      padding-bottom: 2.8rem;
    }
  }
`;

const LeftSide = styled.div`
  text-align: left;

  @media (max-width: 1024px) {
    margin-bottom: 1rem;
    text-align: center;
  }
  @media (max-width: 800px) {
    margin-bottom: 0;
    text-align: left;
  }
  @media (max-width: 425px) {
    margin-bottom: 1rem;
    text-align: center;
  }
`;
const RightSide = styled.div`
  color: ${({ theme }) => theme.colors.primaryBlue};
  font-weight: 600;
  text-align: right;
  width: 50%;

  @media (max-width: 1024px) {
    text-align: center;
  }
  @media (max-width: 800px) {
    text-align: right;
  }
  @media (max-width: 425px) {
    text-align: center;
  }
`;

const CardItem = ({ label, value = '-' }) => {
  return (
    <Wrapper>
      <LeftSide>{label}</LeftSide>
      <RightSide>{value}</RightSide>
    </Wrapper>
  );
};

export default CardItem;
