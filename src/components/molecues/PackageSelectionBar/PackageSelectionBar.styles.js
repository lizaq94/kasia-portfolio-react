import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';

export const Wrapper = styled.div`
  width: 82rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    font-size: 1.8rem;
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #f2f2f2;
  border-radius: 1.6rem;
  padding: 0.9rem;
`;