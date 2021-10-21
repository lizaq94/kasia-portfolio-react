import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: ${({ isTextarea }) => (isTextarea ? '12.8rem' : 'auto')};
  padding: 1.4rem 2rem;
  border: none;
  background-color: #f2f2f2;
  border-radius: 1.6rem;
  font-size: 1.8rem;
  font-family: inherit;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
