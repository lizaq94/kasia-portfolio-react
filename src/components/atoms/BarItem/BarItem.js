import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  max-width: 19.35rem;
`;
export const BarItemContent = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 1.6rem;
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  background-color: ${({ isActive }) => (isActive ? ({ theme }) => theme.colors.primaryBlue : '#f2f2f2')};
`;

export const StyledBarItemContent = styled(BarItemContent)`
  color: black;
  background-color: ${({ isActive }) => (isActive ? ({ theme }) => theme.colors.white : '#f2f2f2')};
`;

const BarItem = (props) => {
  return (
    <Wrapper {...props}>
      {props.isWhite ? (
        <StyledBarItemContent value={props.value} id={props.id} isActive={props.isActive}>
          {props.children}
        </StyledBarItemContent>
      ) : (
        <BarItemContent id={props.id} isActive={props.isActive}>
          {props.children}
        </BarItemContent>
      )}
    </Wrapper>
  );
};

export default BarItem;
