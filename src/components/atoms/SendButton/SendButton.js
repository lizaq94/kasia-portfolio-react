import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { ReactComponent as SendIcon } from 'assets/icons/message-icon.svg';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ${Button} {
    width: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 1.8rem;
    }
  }
`;

const SendButton = ({ buttonText }) => {
  return (
    <Wrapper>
      <Button isPrimary>
        {buttonText}
        <SendIcon />
      </Button>
    </Wrapper>
  );
};

export default SendButton;
