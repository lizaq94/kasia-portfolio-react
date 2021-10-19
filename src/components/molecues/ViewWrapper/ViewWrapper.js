import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme, color }) => theme.colors[color]};
`;

const SectionWrapper = styled.div`
  width: 102.4rem;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ViewWrapper = ({ children, color }) => {
  return (
    <Wrapper color={color}>
      <SectionWrapper>{children}</SectionWrapper>
    </Wrapper>
  );
};

export default ViewWrapper;
