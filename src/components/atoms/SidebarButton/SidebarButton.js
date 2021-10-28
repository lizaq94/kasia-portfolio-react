import styled from 'styled-components';

export const SidebarButton = styled.button`
  display: none;

  @media (max-width: 700px) {
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    position: fixed;
    z-index: 9999;
    top: 10px;
    left: 10px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    border: 2px solid ${({ theme }) => theme.colors.primaryBlue};
    border-radius: 0.4rem;

    span {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    span:first-child {
      left: 0;
      transform: translateX(${({ isOpen }) => (isOpen ? 'calc(-100% - 2px)' : '0')});
      transition: transform ease-in-out 0.3s;

      &::after,
      &::before {
        content: '';
        width: 1.75rem;
        height: 0.3rem;
        background-color: white;
        position: absolute;
        left: 50%;
      }
      &::after {
        top: 1rem;
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &::before {
        bottom: 1rem;
        transform: translate(-50%, 50%) rotate(-45deg);
      }
    }

    span:last-child {
      transform: translateX(${({ isOpen }) => (isOpen ? '0' : 'calc(-100% - 2px)')});
      transition: transform ease-in-out 0.3s;

      &::after,
      &::before {
        content: '';
        width: 3rem;
        height: 0.3rem;
        background-color: white;
        position: absolute;
        top: 50%;
        left: 50%;
      }
      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
`;
